import {
    Controller,
    Get,
    Query,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { PhaseChangeService } from '../services/phase-change.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { e9SwaggerDocs } from '../../../../swagger/e9-swagger-docs';
  
@ApiTags('Cambio-de-fase')
  @Controller('diagram')  
  export class DiagramController {
    constructor(private readonly phaseChangeService: PhaseChangeService) {}
  
    /**
     * Endpoint para calcular los volúmenes específicos según la presión.
     * 
     * @param pressure Presión en MPa
     * @returns JSON con specific_volume_liquid y specific_volume_vapor
     */
    @Get()
    @ApiQuery({
      name: 'pressure',
      description: e9SwaggerDocs['/diagram']?.get?.parameters?.[0]?.description || 'Descripción no disponible',
      required: e9SwaggerDocs['/diagram']?.get?.parameters?.[0]?.required || false,
      type: e9SwaggerDocs['/diagram']?.get?.parameters?.[0]?.schema?.type || 'string',
      example: e9SwaggerDocs['/diagram']?.get?.parameters?.[0]?.schema?.example || 'example',
    })

    @ApiResponse(e9SwaggerDocs['/diagram'].get.responses[200])
    @ApiResponse(e9SwaggerDocs['/diagram'].get.responses[400])
    
    async getDiagram(
      @Query('pressure') pressure: string      
    ): Promise<{ specific_volume_liquid: number; specific_volume_vapor: number }> {
      // Validar que el parámetro pressure esté presente
      if (!pressure) {
        throw new HttpException(
          'The "pressure" parameter is required.',
          HttpStatus.BAD_REQUEST
        );
      }
  
      // Convertir el parámetro a número
      const pressureValue = parseFloat(pressure);
      if (isNaN(pressureValue)) {
        throw new HttpException(
          'The "pressure" parameter must be a valid number.',
          HttpStatus.BAD_REQUEST
        );
      }
  
      // Calcular los volúmenes específicos
      try {
        return this.phaseChangeService.calculateSpecificVolumes(pressureValue);
      } catch (error) {
        const err = error as { message: string; status?: number };
        throw new HttpException(
          err.message || 'An error occurred while calculating.',
          HttpStatus.BAD_REQUEST
        );
      }
    }
  }
  
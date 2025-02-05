import { Controller, Get, Body, HttpException, HttpStatus, Query } from '@nestjs/common';
import { SystemManagerService } from '../services/system-manager.service';
import { HtmlGeneratorService } from '../services/html-generator.service';
import { ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import {e7SwaggerDocs} from '../../../../swagger/e7-swagger-docs';

@ApiTags('Nave-a-la-deriva')
@Controller('repair-bay')
export class RepairBayController {
  constructor(
    private readonly systemManagerService: SystemManagerService,
    private readonly htmlGeneratorService: HtmlGeneratorService
  ) {}

  @Get()
  @ApiQuery({
    name: 'damaged_system',
    description: e7SwaggerDocs['/repair-bay']?.get?.parameters?.[0]?.description || 'Descripción no disponible',
    required: e7SwaggerDocs['/repair-bay']?.get?.parameters?.[0]?.required || false,
    type: e7SwaggerDocs['/repair-bay']?.get?.parameters?.[0]?.schema?.type || 'string',
    example: e7SwaggerDocs['/repair-bay']?.get?.parameters?.[0]?.schema?.example || 'example',
  })
  
  @ApiResponse(e7SwaggerDocs['/repair-bay'].get.responses[200])
  @ApiResponse(e7SwaggerDocs['/repair-bay'].get.responses[400])
  async getRepairBay(    
    @Query('damaged_system') damagedSystem: string,
  ): Promise<string> {
    
    // Obtener todos los sistemas disponibles
    const allSystemsData = this.systemManagerService.getAllSystemsData();    
    // Validar si el sistema proporcionado es válido
    if (!(damagedSystem in allSystemsData)) {
      throw new HttpException(
        `Invalid damaged system: ${damagedSystem}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    // Cast seguro al tipo de las claves permitidas
    const systemKey = damagedSystem as keyof typeof allSystemsData;

    // Obtener el código del sistema usando el tipo correcto
    const systemCode = this.systemManagerService.getSystemCode(systemKey);

    // Retornar el HTML con el código del sistema
    return this.htmlGeneratorService.generateRepairBayHtml(systemCode)
    
  }
}

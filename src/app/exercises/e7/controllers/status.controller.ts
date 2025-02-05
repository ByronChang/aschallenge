import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { SystemManagerService } from '../services/system-manager.service';
import { ApiResponse,ApiTags } from '@nestjs/swagger';
import {e7SwaggerDocs} from '../../../../swagger/e7-swagger-docs';

@ApiTags('Nave-a-la-deriva')
@Controller('status')
export class StatusController {
  constructor(private readonly systemManagerService: SystemManagerService) {}
  
  @Get()
  @ApiResponse(e7SwaggerDocs['/status'].get.responses[200])
  @ApiResponse(e7SwaggerDocs['/status'].get.responses[500])
  public getStatus() {
    // Verificar si el sistema dañado ya está inicializado
    const damagedSystem = this.systemManagerService.getDamagedSystem();
    if (!damagedSystem) {
      throw new HttpException('No damaged system found.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return { damaged_system: damagedSystem };
  }
}

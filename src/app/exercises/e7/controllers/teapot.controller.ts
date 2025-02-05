import { Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { e7SwaggerDocs } from '../../../../swagger/e7-swagger-docs';

@ApiTags('Nave-a-la-deriva')
@Controller('teapot')
export class TeapotController {
  @Post()
  @ApiResponse(e7SwaggerDocs['/teapot'].post.responses[418])
  public handleTeapot(): void {
    throw new HttpException("I'm a teapot", HttpStatus.I_AM_A_TEAPOT);
  }
}
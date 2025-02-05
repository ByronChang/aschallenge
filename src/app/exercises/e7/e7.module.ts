import { Module } from '@nestjs/common';
import { SystemManagerService } from './services/system-manager.service';
import { HtmlGeneratorService } from './services/html-generator.service';
import { StatusController } from './controllers/status.controller';
import { RepairBayController } from './controllers/repair-bay.controller';
import { TeapotController } from './controllers/teapot.controller';

@Module({
  controllers: [StatusController, RepairBayController, TeapotController],
  providers: [SystemManagerService, HtmlGeneratorService],
})
export class E7Module {}

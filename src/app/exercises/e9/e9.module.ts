import { Module } from '@nestjs/common';
import { PhaseChangeService } from './services/phase-change.service';
import { DiagramController } from './controllers/phase-change-diagram.controller';

@Module({
  controllers: [DiagramController],
  providers: [PhaseChangeService],
})
export class E9Module {}

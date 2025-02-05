import { Module } from '@nestjs/common';
import { E7Module } from './app/exercises/e7/e7.module';
import { E9Module } from './app/exercises/e9/e9.module';

@Module({
    imports:[E7Module, E9Module],    
})
export class AppModule {}
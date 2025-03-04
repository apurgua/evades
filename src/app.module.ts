import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComandoModule } from './comando/comando.module';
import { SemestreModule } from './semestre/semestre.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';

@Module({
  imports: [ComandoModule, SemestreModule, EvaluacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { SemestreService } from './semestre.service';

@Controller('semestre')
export class SemestreController {
  constructor(private readonly semestreService: SemestreService) {}

  @Get()
  obtenerSemestres(): { semestre: number; anio: number }[] {
    return this.semestreService.obtenerSemestres();
  }

  @Post()
  agregarSemestre(
    @Body('semestre', ParseIntPipe) semestre: number,
    @Body('anio', ParseIntPipe) anio: number,
  ): string {
    if (semestre < 1 || semestre > 2) {
      throw new BadRequestException('El semestre debe ser 1 o 2');
    }
    if (anio < 2000 || anio > new Date().getFullYear()) {
      throw new BadRequestException('El año es inválido');
    }
    return this.semestreService.agregarSemestre(semestre, anio);
  }
}

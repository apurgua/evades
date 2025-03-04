import { Injectable } from '@nestjs/common';

@Injectable()
export class SemestreService {
  private semestres: { semestre: number; anio: number }[] = [
    { semestre: 1, anio: 2023 },
    { semestre: 2, anio: 2023 },
    { semestre: 1, anio: 2024 },
  ];

  agregarSemestre(semestre: number, anio: number): string {
    this.semestres.push({ semestre, anio });
    return 'Semestre agregado correctamente';
  }

  obtenerSemestres(): { semestre: number; anio: number }[] {
    return this.semestres;
  }

  limpiarSemestres() {
    this.semestres = [];
  }
}

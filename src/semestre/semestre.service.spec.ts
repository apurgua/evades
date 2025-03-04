import { Test, TestingModule } from '@nestjs/testing';
import { SemestreService } from './semestre.service';

describe('SemestreService', () => {
  let service: SemestreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SemestreService],
    }).compile();

    service = module.get<SemestreService>(SemestreService);
    service.limpiarSemestres(); // 🔥 Borra datos preexistentes antes de cada test
  });

  it('debe agregar un semestre correctamente', () => {
    const resultado = service.agregarSemestre(1, 2024);
    expect(resultado).toBe('Semestre agregado correctamente');
    expect(service.obtenerSemestres()).toHaveLength(1);
  });

  it('debe devolver una lista de semestres', () => {
    service.agregarSemestre(1, 2024);
    service.agregarSemestre(2, 2023);
    const lista = service.obtenerSemestres();
    expect(lista).toHaveLength(2);
    expect(lista).toEqual([
      { semestre: 1, anio: 2024 },
      { semestre: 2, anio: 2023 },
    ]);
  });
});

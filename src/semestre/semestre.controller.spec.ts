import { Test, TestingModule } from '@nestjs/testing';
import { SemestreController } from './semestre.controller';
import { SemestreService } from './semestre.service';
import { BadRequestException } from '@nestjs/common';

describe('SemestreController', () => {
  let controller: SemestreController;
  let service: SemestreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SemestreController],
      providers: [SemestreService],
    }).compile();

    controller = module.get<SemestreController>(SemestreController);
    service = module.get<SemestreService>(SemestreService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('debe agregar un semestre válido', () => {
    const resultado = controller.agregarSemestre(1, 2024);
    expect(resultado).toBe('Semestre agregado correctamente');
  });

  it('debe lanzar error si el semestre es menor que 1 o mayor que 2', () => {
    expect(() => controller.agregarSemestre(3, 2024)).toThrow(
      BadRequestException,
    );
    expect(() => controller.agregarSemestre(0, 2024)).toThrow(
      BadRequestException,
    );
  });

  it('debe lanzar error si el año es menor que 2000 o mayor que el año actual', () => {
    expect(() => controller.agregarSemestre(1, 1999)).toThrow(
      BadRequestException,
    );
    expect(() =>
      controller.agregarSemestre(1, new Date().getFullYear() + 1),
    ).toThrow(BadRequestException);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TypesRevenusController } from './types-revenus.controller';
import { TypesRevenusService } from './types-revenus.service';

describe('TypesRevenusController', () => {
  let controller: TypesRevenusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesRevenusController],
      providers: [TypesRevenusService],
    }).compile();

    controller = module.get<TypesRevenusController>(TypesRevenusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

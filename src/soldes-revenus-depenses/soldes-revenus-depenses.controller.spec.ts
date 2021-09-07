import { Test, TestingModule } from '@nestjs/testing';
import { SoldesRevenusDepensesController } from './soldes-revenus-depenses.controller';
import { SoldesRevenusDepensesService } from './soldes-revenus-depenses.service';

describe('SoldesRevenusDepensesController', () => {
  let controller: SoldesRevenusDepensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoldesRevenusDepensesController],
      providers: [SoldesRevenusDepensesService],
    }).compile();

    controller = module.get<SoldesRevenusDepensesController>(
      SoldesRevenusDepensesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

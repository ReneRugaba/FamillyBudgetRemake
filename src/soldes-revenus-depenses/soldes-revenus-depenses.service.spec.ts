import { Test, TestingModule } from '@nestjs/testing';
import { SoldesRevenusDepensesService } from './soldes-revenus-depenses.service';

describe('SoldesRevenusDepensesService', () => {
  let service: SoldesRevenusDepensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoldesRevenusDepensesService],
    }).compile();

    service = module.get<SoldesRevenusDepensesService>(
      SoldesRevenusDepensesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

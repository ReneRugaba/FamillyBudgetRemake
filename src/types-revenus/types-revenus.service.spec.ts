import { Test, TestingModule } from '@nestjs/testing';
import { TypesRevenusService } from './types-revenus.service';

describe('TypesRevenusService', () => {
  let service: TypesRevenusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesRevenusService],
    }).compile();

    service = module.get<TypesRevenusService>(TypesRevenusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

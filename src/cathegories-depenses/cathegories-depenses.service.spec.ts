import { Test, TestingModule } from '@nestjs/testing';
import { CathegoriesDepensesService } from './cathegories-depenses.service';

describe('CathegoriesDepensesService', () => {
  let service: CathegoriesDepensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CathegoriesDepensesService],
    }).compile();

    service = module.get<CathegoriesDepensesService>(
      CathegoriesDepensesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CathegoriesDepensesController } from './cathegories-depenses.controller';
import { CathegoriesDepensesService } from './cathegories-depenses.service';

describe('CathegoriesDepensesController', () => {
  let controller: CathegoriesDepensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CathegoriesDepensesController],
      providers: [CathegoriesDepensesService],
    }).compile();

    controller = module.get<CathegoriesDepensesController>(
      CathegoriesDepensesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

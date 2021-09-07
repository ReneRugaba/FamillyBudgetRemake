import { PartialType } from '@nestjs/mapped-types';
import { CreateSoldesRevenusDepenseDto } from './create-soldes-revenus-depense.dto';

export class UpdateSoldesRevenusDepenseDto extends PartialType(
  CreateSoldesRevenusDepenseDto,
) {}

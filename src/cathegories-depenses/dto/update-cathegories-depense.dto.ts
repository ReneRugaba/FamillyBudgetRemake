import { PartialType } from '@nestjs/mapped-types';
import { CreateCathegoriesDepenseDto } from './create-cathegories-depense.dto';

export class UpdateCathegoriesDepenseDto extends PartialType(
  CreateCathegoriesDepenseDto,
) {}

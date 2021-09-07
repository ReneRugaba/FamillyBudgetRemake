import { PartialType } from '@nestjs/mapped-types';
import { CreateTypesRevenuDto } from './create-types-revenu.dto';

export class UpdateTypesRevenuDto extends PartialType(CreateTypesRevenuDto) {}

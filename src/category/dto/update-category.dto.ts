import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator/types/decorator/decorators';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsOptional()
    @IsString()
    readonly name:string;
}

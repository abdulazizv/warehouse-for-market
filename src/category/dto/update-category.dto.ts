import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator/types/decorator/decorators';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsString()
    readonly name:string;
}

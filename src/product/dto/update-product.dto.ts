import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsOptional()
    @IsString()
    readonly name:string;
    @IsOptional()
    @IsString()
    readonly amount:number;
}

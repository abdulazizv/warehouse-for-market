import {IsString,IsNumber} from 'class-validator';
export class CreateProductDto {
    @IsString()
    readonly name:string;
    @IsNumber()
    readonly amount:number;
}

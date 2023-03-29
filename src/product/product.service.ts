import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productRepo:typeof Product){} 
  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepo.create(createProductDto);
    return newProduct;
  }

  async findAll() {
    const allProducts = await this.productRepo.findAll({include:{all:true}})
    if(allProducts.length >= 1){
      return allProducts;
    } else {
      throw new HttpException(
        'Information not found, Database is empty',
        HttpStatus.NO_CONTENT
      )
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

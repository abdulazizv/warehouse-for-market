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

  async findOne(id: number) {
    const oneProduct = await this.productRepo.findByPk(id);
    if(!oneProduct){
      throw new HttpException(
        'Id is not correct',
        HttpStatus.NOT_FOUND
      )
    } else {
      return oneProduct;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updatedOne = await this.productRepo.update(updateProductDto,{
      where:{
        id: id
      }
    })
    return updatedOne;
  }

  async remove(id: number) {
    await this.productRepo.destroy({
      where:{
        id:id
      }
    });
    return {
      response:true,
      deletedId:id
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private readonly categoryRepo: typeof Category ){}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepo.create(createCategoryDto);
  }

  async findAll() {
    const allCategories = await this.categoryRepo.findAll({include:{all:true}});
    if(allCategories.length < 1) {
      throw new HttpException(
        'Categories not found! Database is empty',
        HttpStatus.NOT_FOUND
      )
    };
    return allCategories;
  }

  async findOne(id: number) {
    const oneCategory = await this.categoryRepo.findOne({
      where:{
        id: id
      }
    });
    if(!oneCategory) {
      throw new HttpException(
        'ID is not correct! Information not found',
        HttpStatus.NOT_FOUND
      )
    };
    return oneCategory;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const check = await this.categoryRepo.findOne({
      where:{
        id: id
      }
    });
    if(!check){
      throw new HttpException(
        'ID is not correct ! Not updated',
        HttpStatus.NOT_FOUND
      )
    };
    await this.categoryRepo.update(updateCategoryDto,{
      where:{
        id: id
      }
    })
    return true;
  }


  async searchOneCategory(id:number){
    return await this.categoryRepo.findByPk(id);
  }
  async remove(id: number) {
    const check = await this.categoryRepo.findOne({
      where:{
        id: id
      }
    });
    if(!check){
      throw new HttpException(
        'ID is not correct',
        HttpStatus.NOT_FOUND
      )
    };
    await this.categoryRepo.destroy({
      where:{
        id: id
      }
    })
    return true;
  }
}

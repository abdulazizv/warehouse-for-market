import { DataType,Model,Table,Column,HasMany } from "sequelize-typescript";

interface categoryAttrs {
    name:string;
}

@Table({tableName:'category'})
export class Category extends Model<Category,categoryAttrs>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;


    @Column({
        type:DataType.STRING
    })
    name:string;
}

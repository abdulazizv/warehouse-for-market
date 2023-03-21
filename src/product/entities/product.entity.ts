
import { DataType,Model,Table,Column,ForeignKey,BelongsTo } from "sequelize-typescript";
import { Category } from "../../category/entities/category.entity";

interface productAttrs {
    name:string;
    amount:number;
    price:number;
}

export class Product extends Model<productAttrs,Product> {
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @Column({
        type:DataType.STRING,
    })
    name:string;

    @Column({
        type:DataType.INTEGER,
    })
    amount:number;

    @Column({
        type:DataType.DECIMAL
    })
    price:number;

    @ForeignKey(() => Category)
    @Column({
        type:DataType.INTEGER
    })
    category_id:number;

    @BelongsTo(() => Category)
    category: Category;
}

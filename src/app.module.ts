import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`
  }),
  SequelizeModule.forRoot({
    dialect:'postgres',
    host:process.env.POSTGRES_HOST,
    port:Number(process.env.POSTGRES_PORT),
    username:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB,
    models:[],
    autoLoadModels:true,
    logging:false
  }),
  CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

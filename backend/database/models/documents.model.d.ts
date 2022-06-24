import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelDocsProducts } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelDocsProducts, 'id'>;
declare class ModelDocsProducts extends Model<IModelDocsProducts, IModelCreationAttributes> implements IModelDocsProducts {
    id: number;
    idProduct: number;
    title: string;
    description: string;
    type: number;
    filePath: string;
    createdAt: Date;
}
export default ModelDocsProducts;

import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelOptions } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelOptions, 'id'>;
declare class ModelOptionsProduct extends Model<IModelOptions, IModelCreationAttributes> implements IModelOptions {
    id: number;
    label: string;
    type: number;
}
export default ModelOptionsProduct;

import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelSponsor } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelSponsor, 'id'>;
declare class ModelSponsorProduct extends Model<IModelSponsor, IModelCreationAttributes> implements IModelSponsor {
    id: number;
    idProduct: number;
    idSponsor: number;
    typeResource: number;
    valueResource: string;
    createdAt: Date;
}
export default ModelSponsorProduct;

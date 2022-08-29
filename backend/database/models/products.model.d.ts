import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelInfoProducts } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelInfoProducts, 'id'>;
declare class ModelInfoProducts extends Model<IModelInfoProducts, IModelCreationAttributes> implements IModelInfoProducts {
    id: number;
    title: string;
    about: string;
    category: number;
    financialResource: number;
    subCategory: number;
    thumbnail: string;
    link: string;
    location: string;
    cpf_cnpj: string;
    idUser: number;
    idInstitution: number;
    idUserRegistered: number;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    get params(): IModelInfoProducts;
}
export default ModelInfoProducts;

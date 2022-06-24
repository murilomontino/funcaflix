import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelDataSheet } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelDataSheet, 'id'>;
declare class ModelDataSheetProducts extends Model<IModelDataSheet, IModelCreationAttributes> implements IModelDataSheet {
    id: number;
    idProduct: number;
    cpf_cnpj: string;
    name: string;
    about: string;
    responsible: boolean;
    personFunction: number;
    imgProfile: string;
    idUser: number;
    createdAt: Date;
}
export default ModelDataSheetProducts;

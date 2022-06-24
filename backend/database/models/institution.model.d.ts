import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelInstitution } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelInstitution, 'id'>;
declare class ModelInstitution extends Model<IModelInstitution, IModelCreationAttributes> implements IModelInstitution {
    id: number;
    name: string;
    abbreviation: string;
    cnpj: string;
    city: string;
    logo: string;
    idUser: number;
    createdAt: Date;
}
export default ModelInstitution;

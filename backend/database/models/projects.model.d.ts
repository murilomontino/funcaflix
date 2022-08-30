import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelProject } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelProject, 'id'>;
declare class ModelProject extends Model<IModelProject, IModelCreationAttributes> implements IModelProject {
    id: number;
    idUser: number;
    cpf: string;
    nameProject: string;
    summaryProject: string;
    aboutProject: string;
    typeProject: string;
    urlProject: string;
    dateStart: Date;
    dateEnd: Date;
    hourEnd: string;
    status: number;
    createdAt: string;
    updateAt: string;
    type: number;
    company: string;
    city: string;
    amountOfVacancies: number;
    amountOfEnrollment: number;
    financialResource: string;
    yearRelease: string;
}
export default ModelProject;

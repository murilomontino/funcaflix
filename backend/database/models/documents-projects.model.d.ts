import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelDocProject } from '@/types/models';
declare type IModelCreationAttributes = Optional<IModelDocProject, 'id'>;
declare class ModelDocProject extends Model<IModelDocProject, IModelCreationAttributes> implements IModelDocProject {
    id: number;
    idProject: number;
    file: string;
    createdAt?: string;
    name: string;
    type: number;
    typeFile: string;
    link: string;
    updated: boolean;
}
export default ModelDocProject;

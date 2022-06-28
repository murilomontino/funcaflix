import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelProgramsTV } from '@/types/models';
export declare type IModelCreationAttributes = Optional<IModelProgramsTV, 'id'>;
declare class ModelProgramsTV extends Model<IModelProgramsTV, IModelCreationAttributes> implements IModelProgramsTV {
    id: number;
    idProduct: number;
    playlistId: string;
    videoId: string;
    subCategory: number;
    publishedAt: string;
    description: string;
    thumbnail: string;
    title: string;
    tags: string;
    genres: string;
    active: boolean;
    createdAt: Date;
}
export default ModelProgramsTV;

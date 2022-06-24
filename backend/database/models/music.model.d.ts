import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelMusic } from '@/types/models';
export declare type IModelCreationAttributes = Optional<IModelMusic, 'id'>;
declare class ModelMusics extends Model<IModelMusic, IModelCreationAttributes> implements IModelMusic {
    id: number;
    idDocument: number;
    idProduct: number;
    artist: string;
    title: string;
    duration: string;
    tags: string;
    genres: string;
    composer: string;
    createdAt: Date;
}
export default ModelMusics;

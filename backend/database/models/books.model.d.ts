import { Optional } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IModelBooks } from '@/types/models';
export declare type IModelCreationAttributes = Optional<IModelBooks, 'id'>;
declare class ModelBooks extends Model<IModelBooks, IModelCreationAttributes> implements IModelBooks {
    id: number;
    idDocument: number;
    idProduct: number;
    author: string;
    title: string;
    subTitle: string;
    isbn: string;
    publisher: string;
    publicationDate: string;
    numberOfPages: string;
    dimensions: string;
    synopsis: string;
    tags: string;
    genres: string;
    illustration: boolean;
    illustrator: string;
    createdAt: Date;
}
export default ModelBooks;

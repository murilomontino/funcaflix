import { ModelCtor } from 'sequelize-typescript';
import ModelAudioVisual from './audiovisual.model';
import ModelBooks from './books.model';
import ModelDataSheetProducts from './datasheet.model';
import ModelDocsProducts from './documents.model';
import ModelInstitution from './institution.model';
import ModelMusics from './music.model';
import ModelOptionsProduct from './options.model';
import ModelInfoProducts from './products.model';
import ModelSponsorProduct from './sponsor.model';
export declare type DbModels = {
    ModelBooks: ModelCtor<ModelBooks>;
    ModelInfoProducts: ModelCtor<ModelInfoProducts>;
    ModelOptionsProduct: ModelCtor<ModelOptionsProduct>;
    ModelInstitution: ModelCtor<ModelInstitution>;
    ModelDataSheetProducts: ModelCtor<ModelDataSheetProducts>;
    ModelDocsProducts: ModelCtor<ModelDocsProducts>;
    ModelSponsorProduct: ModelCtor<ModelSponsorProduct>;
    ModelMusics: ModelCtor<ModelMusics>;
    ModelAudioVisual: ModelCtor<ModelAudioVisual>;
};
export declare namespace DbModels {
    type ModelBooks = ModelCtor;
    type ModelInfoProducts = ModelCtor;
    type ModelOptionsProduct = ModelCtor;
    type ModelInstitution = ModelCtor;
    type ModelDataSheetProducts = ModelCtor;
    type ModelDocsProducts = ModelCtor;
    type ModelSponsorProduct = ModelCtor;
    type ModelMusics = ModelCtor;
    type ModelAudioVisual = ModelCtor;
}

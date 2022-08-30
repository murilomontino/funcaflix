import { ModelCtor } from 'sequelize-typescript'

import ModelAudioVisual from './audiovisual.model'
import ModelBooks from './books.model'
import ModelDataSheetProducts from './datasheet.model'
import ModelDocProject from './documents-projects.model'
import ModelDocsProducts from './documents.model'
import ModelInstitution from './institution.model'
import ModelMusics from './music.model'
import ModelOptionsProduct from './options.model'
import ModelInfoProducts from './products.model'
import ModelProject from './projects.model'
import ModelSponsorProduct from './sponsor.model'
import ModelProgramsTV from './tv-programs.model'
export declare type DbModels = {
  ModelAudioVisual: ModelCtor<ModelAudioVisual>
  ModelBooks: ModelCtor<ModelBooks>
  ModelInfoProducts: ModelCtor<ModelInfoProducts>
  ModelOptionsProduct: ModelCtor<ModelOptionsProduct>
  ModelInstitution: ModelCtor<ModelInstitution>
  ModelDataSheetProducts: ModelCtor<ModelDataSheetProducts>
  ModelDocsProducts: ModelCtor<ModelDocsProducts>
  ModelSponsorProduct: ModelCtor<ModelSponsorProduct>
  ModelMusics: ModelCtor<ModelMusics>
  ModelProgramsTV: ModelCtor<ModelProgramsTV>
  ModelDocProject: ModelCtor<ModelDocProject>
  ModelProject: ModelCtor<ModelProject>
}
export declare namespace DbModels {
  type ModelAudioVisual = ModelCtor
  type ModelBooks = ModelCtor
  type ModelInfoProducts = ModelCtor
  type ModelOptionsProduct = ModelCtor
  type ModelInstitution = ModelCtor
  type ModelDataSheetProducts = ModelCtor
  type ModelDocsProducts = ModelCtor
  type ModelSponsorProduct = ModelCtor
  type ModelMusics = ModelCtor
  type ModelProgramsTV = ModelCtor
  type ModelDocProject = ModelCtor
  type ModelProject = ModelCtor
}

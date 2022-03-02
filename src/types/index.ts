/* eslint-disable no-unused-vars */

export type { books } from './models/books'
export type { links } from './models/links'
export type { musicsAlbums, tracks } from './models/musics'
export { TypeMusicAlbums } from './models/musics'
export type { patrons } from './models/patrons'
export type { generos, products, tags } from './models/products'
export type { sheet } from './models/sheet'
export type { documents } from './models/documents'
export { TypesProducts, mapTypesProducts } from './models/documents'
export type {
  YTPlaylistsAttributes,
  YTVideosAttributes,
} from './models/youtube'
export type {
  exhibition,
  exhibitionPhotos,
  exhibitionWorks,
} from './models/exhibition'

export { ExhibitionPhotosTypes } from './models/exhibition'
export {
  FinancialResources,
  mapFinancialResources,
} from './models/financialResources'
export { Category, mapCategory } from './models/categoriesProducts'
export type { ContentMusic, ExtImgCapa, TypeImgCapa } from './products'
export type {
  AuxGettersDocs,
  GetterBooks,
  GettersAlbums,
  GettersExhibitions,
  GettersExhibitionsPhotos,
  GettersExhibitionsWorks,
  GettersTracks,
  SetterAlbumParams,
  SettersAlbums,
  SettersBooks,
  SettersBooksParams,
  SettersExhibitions,
  SettersExhibitionsPhotos,
  SettersExhibitionsWorks,
  SettersGenericProduct,
  SettersTracks,
} from './products'

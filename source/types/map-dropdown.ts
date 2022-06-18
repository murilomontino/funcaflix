import { FinancialResources } from 'types-funcap'

enum Options {
  AudioVisual = 1,
  Book = 2,
  Audio = 3,
  Event = 4,
  Exhibition = 5,
  Single = 6,
  Album = 7,
  AlbumInterprete = 8,
  Ep = 9,
  BookSubCategory = 10,
  Curta = 11,
  Documentaries = 12,
  Shows = 13,
  PDF = 14,
  MP3 = 15,
  MP4 = 16,
  Link = 17,
  Thumbnail = 18,
  PhotoOfArtists = 19,
  PhotoOfEvents = 20,
  PhotoOfPlace = 21,
}

export enum EnumCategory {
  AudioVisual = Options.AudioVisual,
  Book = Options.Book,
  Audio = Options.Audio,
  Event = Options.Event,
  Exhibition = Options.Exhibition,
}

enum SubCategory {
  Single = Options.Single,
  Album = Options.Album,
  AlbumInterprete = Options.AlbumInterprete,
  Ep = Options.Ep,
  Book = Options.BookSubCategory,
  Curtas = Options.Curta,
  Shows = Options.Shows,
  Documentaries = Options.Documentaries,
}

enum Type {
  PDF = Options.PDF,
  MP3 = Options.MP3,
  MP4 = Options.MP4,
  LINK = Options.Link,
  THUMBNAIL = Options.Thumbnail,
  PHOTO_ARTIST = Options.PhotoOfArtists,
  PHOTO_EVENT = Options.PhotoOfEvents,
  PHOTO_LOCAL = Options.PhotoOfPlace,
}

export const mapCategoryProduct: { label: string; value: number }[] = [
  { label: 'Livro', value: EnumCategory.Book },
  { label: 'AudioVisual', value: EnumCategory.AudioVisual },
  { label: 'Evento', value: EnumCategory.Event },
  { label: 'Exposição', value: EnumCategory.Exhibition },
  { label: 'Música', value: EnumCategory.Audio },
]

export const mapSubCategory = {
  [EnumCategory.Audio]: 2,
  [EnumCategory.Book]: 3,
  [EnumCategory.AudioVisual]: 4,
  [EnumCategory.Event]: 5,
  [EnumCategory.Exhibition]: 6,
}

export const mapTypeProduct: { label: string; value: number }[] = [
  { label: 'Livro', value: Type.PDF },
  { label: 'Música(s)', value: Type.MP3 },
  { label: 'Link', value: Type.LINK },
  { label: 'Capa', value: Type.THUMBNAIL },
  { label: 'Foto de Artista', value: Type.PHOTO_ARTIST },
  { label: 'Foto de Evento', value: Type.PHOTO_EVENT },
  { label: 'Foto de Local', value: Type.PHOTO_LOCAL },
  { label: 'MP4', value: Type.MP4 },
]

export const mapTypeMusic: { label: string; value: number }[] = [
  {
    label: 'Álbum',
    value: SubCategory.Album,
  },
  {
    value: SubCategory.AlbumInterprete,
    label: 'Álbum Interprete',
  },
  {
    value: SubCategory.Single,
    label: 'Single',
  },
  {
    value: SubCategory.Ep,
    label: 'EP',
  },
]

export const mapFinancialResources = [
  { label: 'Lei Aldir Blanc ', value: FinancialResources.LeiAldirBlanc },
  {
    label: 'Recursos do Artista',
    value: FinancialResources.RecursoDoArtista,
  },
  { label: 'Funcart', value: FinancialResources.Funcart },
  { label: 'Municipal', value: FinancialResources.Municipal },
  { label: 'Federal', value: FinancialResources.Federal },
]

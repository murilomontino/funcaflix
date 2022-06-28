export interface IModelSponsor {
    id: number;
    idProduct: number;
    idSponsor?: number;
    typeResource: number;
    valueResource?: string;
    createdAt?: Date;
}
export interface IModelInstitution {
    id: number;
    name: string;
    abbreviation?: string;
    cnpj: string;
    city?: string;
    logo?: string;
    idUser?: number;
    createdAt?: Date;
}
export interface IModelOptions {
    id: number;
    label: string;
    type: number;
}
export declare type IModelBooks = {
    id?: number;
    idDocument: number;
    idProduct: number;
    author: string;
    title: string;
    subTitle?: string;
    isbn: string;
    publisher?: string;
    publicationDate?: string;
    numberOfPages?: string;
    dimensions?: string;
    synopsis?: string;
    illustration?: boolean;
    illustrator?: string;
    tags?: string;
    genres?: string;
    createdAt?: Date;
};
export interface IModelDocsProducts {
    id: number;
    idProduct: number;
    title: string;
    description?: string;
    type: number;
    filePath: string;
    createdAt?: Date;
}
export interface IModelDataSheet {
    id: number;
    idProduct: number;
    cpf_cnpj: string;
    name: string;
    about: string;
    responsible?: boolean;
    personFunction: number;
    imgProfile?: string;
    idUser?: number;
    createdAt?: Date;
}
export interface IModelInfoProducts {
    id: number;
    title: string;
    about?: string;
    thumbnail?: string;
    category: number;
    subCategory: number;
    financialResource: number;
    link?: string;
    cpf_cnpj: string;
    idUser?: number;
    idUserRegistered?: number;
    idInstitution?: number;
    location?: string;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
    existSubProd?: boolean;
    idSubProd?: number;
}
export interface IModelMusic {
    id: number;
    idProduct: number;
    idDocument: number;
    title: string;
    artist: string;
    duration: string;
    composer: string;
    createdAt?: Date;
}
export interface IModelProgramsTV {
    id: number;
    idProduct: number;
    title: string;
    playlistId: string;
    videoId: string;
    publishedAt: string;
    description: string;
    thumbnail: string;
    active?: boolean;
    createdAt?: Date;
}

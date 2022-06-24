/* eslint-disable no-unused-vars */
import { IGetterProduct } from '@/types/getters'
import { IProduct } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterProduct extends GetterEntity<IGetterProduct> implements IProduct {
  public id: number
  public title: string
  public about: string
  public category: number
  public subCategory: number
  public thumbnail: string
  public link: string
  public cpf_cnpj: string
  public idUser: number
  public idUserRegistered: number
  public active: boolean
  public financialResource: number
  public createdAt?: Date
  public updatedAt?: Date

  public build(params: IGetterProduct): GetterProduct {
    this.id = params.id
    this.title = params.title
    this.about = params.about
    this.category = params.category
    this.subCategory = params.subCategory
    this.link = params.link
    this.cpf_cnpj = params.cpf_cnpj
    this.idUser = params.idUser
    this.idUserRegistered = params.idUserRegistered
    this.active = params.active
    this.financialResource = params.financialResource
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
    return this
  }

  public params() {
    return {
      id: this.id,
      title: this.title,
      about: this.about,
      category: this.category,
      subCategory: this.subCategory,
      link: this.link,
      cpf_cnpj: this.cpf_cnpj,
      idUser: this.idUser,
      idUserRegistered: this.idUserRegistered,
      active: this.active,
      financialResource: this.financialResource,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    } as GetterProduct
  }
}

/* eslint-disable no-unused-vars */
import { isValid } from '@/helpers'
import { IGetterEvent } from '@/types/getters'
import { IEvent, IProduct } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterEvent extends GetterEntity<IGetterEvent> implements IEvent, IProduct {

  public id: number
  public title: string
  public about: string
  public category: number
  public financialResource: number
  public subCategory: number
  public link: string
  public cpf_cnpj: string
  public idUser: number
  public idUserRegistered: number
  public active: boolean
  public existSubProd?: boolean
  public idSubProd?: number
  public idProduct: number
  public typeEvent: number
  public subject: number
  public local: string
  public cep: string
  public address: string
  public number: string
  public complement: string
  public neighborhood: string
  public city: string
  public uf: string
  public dateStart: string
  public dateEnd: string
  public hourStart: string
  public hourEnd: string
  public thumbnail: string
  public createdAt: string
  public updatedAt?: string | Date

  private constructor() {
    super();
  }



  static build(params: IGetterEvent): GetterEvent {
    const {
      id,
      address,
      cep,
      city,
      complement,
      dateEnd,
      dateStart,
      hourEnd,
      hourStart,
      neighborhood,
      uf,
      thumbnail,
      title,
      about,
      category,
      financialResource,
      subCategory,
      link,
      cpf_cnpj,
      idUser,
      idUserRegistered,
      active,
      existSubProd,
      idSubProd,
      createdAt,
      idProduct,
      typeEvent,
      subject,
      local,
      updatedAt,
      number,
    } = params


    return new GetterEvent()
      .defineId(id)
      .defineAddress(address)
      .defineCep(cep)
      .defineCity(city)
      .defineComplement(complement)
      .defineDateEnd(dateEnd)
      .defineDateStart(dateStart)
      .defineHourEnd(hourEnd)
      .defineHourStart(hourStart)
      .defineNeighborhood(neighborhood)
      .defineUf(uf)
      .defineThumbnail(thumbnail)
      .defineTitle(title)
      .defineAbout(about)
      .defineCategory(category)
      .defineFinancialResource(financialResource)
      .defineSubCategory(subCategory)
      .defineLink(link)
      .defineCpfCnpj(cpf_cnpj)
      .defineIdUser(idUser)
      .defineIdUserRegistered(idUserRegistered)
      .defineActive(active)
      .defineExistSubProd(existSubProd)
      .defineIdSubProd(idSubProd)
      .defineCreatedAt(createdAt)
      .defineIdProduct(idProduct)
      .defineTypeEvent(typeEvent)
      .defineSubject(subject)
      .defineLocal(local)
      .defineUpdatedAt(updatedAt)
      .defineNumber(number)
  }

  public defineId(id: number) {
    this.id = id
    return this
  }

  public defineThumbnail(thumbnail: string = null) {
    if (typeof thumbnail === 'string') {
      const thumbnailSplit = thumbnail.split('/')
      const thumbnailName = thumbnailSplit[thumbnailSplit.length - 1]
      this.thumbnail = thumbnailName
      return this
    }

    this.thumbnail = thumbnail
    return this
  }

  public defineTitle(title: string = null) {
    this.title = title
    return this
  }

  public defineAbout(about: string = null) {
    this.about = about
    return this
  }

  public defineCategory(category: number = null) {
    this.category = category
    return this
  }

  public defineFinancialResource(financialResource: number = null) {
    this.financialResource = financialResource
    return this
  }

  public defineSubCategory(subCategory: number = null) {
    this.subCategory = subCategory
    return this
  }

  public defineLink(link: string = null) {
    this.link = link
    return this
  }

  public defineCpfCnpj(cpf_cnpj: string = null) {
    this.cpf_cnpj = null
    return this
  }

  public defineIdUser(idUser: number = null) {
    this.idUser = idUser
    return this
  }

  public defineIdUserRegistered(idUserRegistered: number = null) {
    this.idUserRegistered = idUserRegistered
    return this
  }

  public defineActive(active: boolean = true) {
    this.active = active
    return this
  }

  public defineUpdatedAt(updatedAt: string | Date = null) {

    if (!isValid(updatedAt)) {
      this.createdAt = null
      return this
    }

    if (typeof updatedAt === 'string') {
      this.updatedAt = updatedAt
      return this
    }

    this.updatedAt = updatedAt
    return this
  }

  public defineExistSubProd(existSubProd: boolean = false) {
    this.existSubProd = existSubProd
    return this
  }

  public defineIdSubProd(idSubProd: number = null) {
    this.idSubProd = idSubProd
    return this
  }

  public defineIdProduct(idProduct: number = null) {
    this.idProduct = idProduct
    return this
  }

  public defineTypeEvent(typeEvent: number = null) {
    this.typeEvent = typeEvent
    return this
  }

  public defineSubject(subject: number = null) {
    this.subject = subject
    return this
  }

  public defineLocal(local: string = null) {
    this.local = local
    return this
  }

  public defineCep(cep: string = null) {
    this.cep = cep
    return this
  }

  public defineAddress(address: string = null) {
    this.address = address
    return this
  }

  public defineNumber(number: string = null) {
    this.number = number
    return this
  }

  public defineComplement(complement: string = null) {
    this.complement = complement
    return this
  }

  public defineNeighborhood(neighborhood: string = null) {
    this.neighborhood = neighborhood
    return this
  }

  public defineCity(city: string = null) {
    this.city = city
    return this
  }

  public defineUf(uf: string = null) {
    this.uf = uf
    return this
  }

  public defineDateStart(dateStart: string = null) {
    this.dateStart = dateStart
    return this
  }

  public defineDateEnd(dateEnd: string = null) {
    this.dateEnd = dateEnd
    return this
  }

  public defineHourStart(hourStart: string = null) {
    this.hourStart = hourStart
    return this
  }

  public defineHourEnd(hourEnd: string = null) {
    this.hourEnd = hourEnd
    return this
  }

  public defineCreatedAt(createdAt: Date | string = null) {

    if (!isValid(createdAt)) {
      this.createdAt = null
      return this
    }

    if (typeof createdAt === 'string') {
      this.createdAt = createdAt
      return this
    }

    this.createdAt = createdAt.toISOString()

    return this
  }

  params(): IGetterEvent {
    return Object.assign({}, this)
  }
}





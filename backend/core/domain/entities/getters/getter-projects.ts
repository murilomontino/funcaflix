/* eslint-disable no-unused-vars */
import { IGetterProjects } from '@/types/getters'
import { IProjects, IDocProjects } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterProjects extends GetterEntity<IGetterProjects> implements IProjects {
  id: number
  idUser: number
  cpf: string
  nameProject: string
  summaryProject: string
  aboutProject: string
  typeProject: string
  urlProject: string
  dateStart: Date
  dateEnd: Date
  hourEnd: string
  status: number
  createdAt: string
  updateAt: string
  type: number
  company: string
  city: string
  amountOfVacancies: number
  amountOfEnrollment: number
  financialResource: string
  yearRelease: string
  docs: IDocProjects[]

  private constructor() {
    super()
  }

  static build(params: IGetterProjects): GetterProjects {
    const {
      id,
      idUser,
      cpf,
      nameProject,
      summaryProject,
      aboutProject,
      typeProject,
      urlProject,
      dateStart,
      dateEnd,
      hourEnd,
      status,
      createdAt,
      updateAt,
      type,
      company,
      city,
      amountOfVacancies,
      amountOfEnrollment,
      financialResource,
      yearRelease,
      docs,
    } = params

    return new GetterProjects()
      .defineId(id)
      .defineIdUser(idUser)
      .defineCpf(cpf)
      .defineNameProject(nameProject)
      .defineSummaryProject(summaryProject)
      .defineAboutProject(aboutProject)
      .defineTypeProject(typeProject)
      .defineUrlProject(urlProject)
      .defineDateStart(dateStart)
      .defineDateEnd(dateEnd)
      .defineHourEnd(hourEnd)
      .defineStatus(status)
      .defineCreatedAt(createdAt)
      .defineUpdateAt(updateAt)
      .defineType(type)
      .defineCompany(company)
      .defineCity(city)
      .defineAmountOfVacancies(amountOfVacancies)
      .defineAmountOfEnrollment(amountOfEnrollment)
      .defineFinancialResource(financialResource)
      .defineYearRelease(yearRelease)
      .defineDocs(docs)
  }

  public params() {
    return Object.assign({}, this)
  }

  public defineDocs(docs: IDocProjects[] = []) {
    this.docs = docs
    return this
  }

  public defineCpf(cpf = '***.***.***-**') {
    this.cpf = cpf
    return this
  }

  public defineId(id = 0) {
    this.id = id
    return this
  }

  public defineIdUser(idUser = 0) {
    this.idUser = idUser
    return this
  }

  public defineNameProject(nameProject: string) {
    this.nameProject = nameProject
    return this
  }

  public defineSummaryProject(summaryProject: string) {
    this.summaryProject = summaryProject
    return this
  }

  public defineAboutProject(aboutProject: string) {
    this.aboutProject = aboutProject
    return this
  }

  public defineTypeProject(typeProject: string) {
    this.typeProject = typeProject
    return this
  }

  public defineUrlProject(urlProject: string) {
    this.urlProject = urlProject
    return this
  }

  public defineDateStart(dateStart: Date) {
    this.dateStart = dateStart
    return this
  }

  public defineDateEnd(dateEnd: Date) {
    this.dateEnd = dateEnd
    return this
  }

  public defineHourEnd(hourEnd: string) {
    this.hourEnd = hourEnd
    return this
  }

  public defineStatus(status: number) {
    this.status = status
    return this
  }

  public defineCreatedAt(createdAt: string) {
    this.createdAt = createdAt
    return this
  }

  public defineUpdateAt(updateAt: string) {
    this.updateAt = updateAt
    return this
  }

  public defineType(type: number) {
    this.type = type
    return this
  }

  public defineCompany(company: string) {
    this.company = company
    return this
  }

  public defineCity(city: string) {
    this.city = city
    return this
  }

  public defineAmountOfVacancies(amountOfVacancies: number) {
    this.amountOfVacancies = amountOfVacancies
    return this
  }

  public defineAmountOfEnrollment(amountOfEnrollment: number) {
    this.amountOfEnrollment = amountOfEnrollment
    return this
  }

  public defineFinancialResource(financialResource: string) {
    this.financialResource = financialResource
    return this
  }

  public defineYearRelease(yearRelease: string) {
    this.yearRelease = yearRelease
    return this
  }
}

/* eslint-disable no-unused-vars */
import { IGetterProjects } from '@/types/getters'
import { IProjects } from '@/types/setters'

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

  public build(params: IGetterProjects): GetterProjects {
    Object.assign(this, params)
    return this
  }

  public params() {
    return Object.assign({}, this)
  }
}

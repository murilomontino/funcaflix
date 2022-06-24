import { GetterOption } from '@/domain/entities/getters/getter-options'
import { left, PromiseEither } from '@/shared/either'

import { db } from '../../../../database'
import { UseCase } from '../ports/use-case'

export class GetAllOptionsByType implements UseCase<TypeOption, GetterOption[]> {
  async execute(_, params?: TypeOption): PromiseEither<GetterOption[], Error> {
    const options = await db.ModelOptionsProduct.findAll({
      where: { type: params.type },
    })

    const optionsList = await Promise.all(
      options.map((option) => ({
        label: option.get('label'),
        value: option.get('id'),
      }))
    )

    return left(optionsList as GetterOption[])
  }
}

type TypeOption = {
  type: number
}

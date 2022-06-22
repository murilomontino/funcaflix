import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'
import { db } from '@mapa-cultural/database'

import { UseCase } from '../ports/use-case'

enum ProductType {
  AudioVisual = 1,
  Livro = 2,
  Audio = 3,
  Evento = 4,
  Exposicao = 5,
}

type Params = {
  category: string
}

export class FindAllProductsByCategory implements UseCase<unknown, IGetterProduct[]> {
  async execute(_, params: Params): PromiseEither<IGetterProduct[], Error> {
    if (!params.category) {
      return right(new Error('Id é obrigatório'))
    }
    const category = parseInt(params.category)
    // id deve ser um ProductType
    if (!Object.values(ProductType).includes(category)) {
      return right(new Error('Id deve ser uma categoria válida'))
    }

    const modelsProducts = await db.ModelInfoProducts.findAll({
      where: {
        category,
        active: true,
      },
      attributes: ['id', 'title', 'about', 'thumbnail', 'category'],
    })

    const products = await Promise.all([
      ...modelsProducts.map((model) => {
        const product = model.get({ plain: true })

        return {
          id: product.id,
          title: product.title,
          about: product.about,
          thumbnail: product.thumbnail,
          category: product.category,
        } as IGetterProduct
      }),
    ])

    return left(products)
  }
}

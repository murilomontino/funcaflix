import { Router } from 'express'
import { PathLike } from 'fs'

import { PathImageExistsUseCase } from '../../../backend/core/domain/usecases'
import { NotFoundProductError } from '../../../backend/core/domain/usecases/errors'
import { Either } from '../../../backend/core/shared/either'
import { adaptFileRoute } from '../../adapters'
import { makeStreamOutImageComposer } from '../../composers/images-composers/make-image-out-stream'
const Images = Router()

// Objeto que contain todas as rotas de produtos
export const PathImages = {
  GET_IMAGE: '/images/:image',
}

// Adiciona a rota /image/:id para retornar uma imagem de um produto
Images.get(
  PathImages.GET_IMAGE,
  async (req, res, next) => {
    // Constrói o caminho da imagem
    const { image } = req.params

    const pathUseCase = new PathImageExistsUseCase()
    const imagePath: Either<PathLike, NotFoundProductError> = await pathUseCase.execute({ image })

    if (imagePath.isRight()) {
      return res.send(404).end()
    }

    req.query.path = imagePath.value.toString()
    req.params.path = imagePath.value.toString()

    next()
  },
  adaptFileRoute(makeStreamOutImageComposer())
)

export default Images

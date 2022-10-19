import { TypeDoc } from '@/types/ports'
import { Router } from 'express'

import { PathExistsUseCase } from '../../../backend/core/domain/usecases'
import { adaptFileRoute } from '../../adapters'
import { makeStreamOutImageComposer } from '../../composers/images-composers/make-image-out-stream'
const Images = Router()

// Objeto que contain todas as rotas de produtos
export const PathImages = {
  GET_IMAGE: '/images/:image',
  GET_PROFILE_IMAGE: '/images/profile/:image',
}

// Adiciona a rota /image/:id para retornar uma imagem de um produto
Images.get(
  PathImages.GET_PROFILE_IMAGE,
  async (req, res, next) => {
    // Constrói o caminho da imagem

    const { image } = req.params

    const pathUseCase = new PathExistsUseCase()
    const imagePath = await pathUseCase.execute({ id: image, type: TypeDoc.IMG_PROFILE })

    if (imagePath.isRight()) {
      return res.sendStatus(404).end()
    }

    req.query.path = imagePath.value.toString()
    req.params.path = imagePath.value.toString()

    next()
  },
  adaptFileRoute(makeStreamOutImageComposer())
)

// Adiciona a rota /image/:id para retornar uma imagem de um produto
Images.get(
  PathImages.GET_IMAGE,
  async (req, res, next) => {
    // Constrói o caminho da imagem

    const { image } = req.params

    const pathUseCase = new PathExistsUseCase()
    const imagePath = await pathUseCase.execute({ id: image, type: TypeDoc.CAPA })

    if (imagePath.isRight()) {
      return res.sendStatus(404).end()
    }

    req.query.path = imagePath.value.toString()
    req.params.path = imagePath.value.toString()

    next()
  },
  adaptFileRoute(makeStreamOutImageComposer())
)

export default Images

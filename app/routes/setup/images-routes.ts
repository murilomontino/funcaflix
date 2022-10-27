import { TypeDoc } from '@/types/ports'
import { Router } from 'express'

import { PathExistsUseCase } from '../../../backend/core/domain/usecases'
import { adaptFileRoute } from '../../adapters'
import { makeStreamOutImageComposer } from '../../composers/images-composers/make-image-out-stream'
import { existsSync } from 'fs'

import path from 'path'

const Images = Router()

// Objeto que contain todas as rotas de produtos
export const PathImages = {
  GET_IMAGE: '/images/:image',
  GET_PROFILE_IMAGE: '/images/profile/:image',
  GET_BANNER_IMAGE: '/images/banner/:image',
}

Images.get(
  PathImages.GET_BANNER_IMAGE,
  async (req, res, next) => {
    // Constrói o caminho da imagem

    const { image } = req.params

    const imagePath = path.join(
      process.env.PATH_PRODUCTS, 
      process.env.HASH_KEY, 
      'perfil', 
      'foto_banner', 
      image
    )

    if (!existsSync(imagePath)) {
      return res.sendStatus(404).end()
    }

    req.query.path = imagePath
    req.params.path = imagePath

    next()
  },
  adaptFileRoute(makeStreamOutImageComposer())
)

Images.get(
  PathImages.GET_PROFILE_IMAGE,
  async (req, res, next) => {
    // Constrói o caminho da imagem

    const { image } = req.params

    const imagePath = path.join(
      process.env.PATH_PRODUCTS, 
      process.env.HASH_KEY, 
      'perfil', 
      'foto_perfil', 
      image
    )

    if (!existsSync(imagePath)) {
      return res.sendStatus(404).end()
    }

    req.query.path = imagePath
    req.params.path = imagePath

    next()
  },
  adaptFileRoute(makeStreamOutImageComposer())
)

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

import { TypeDoc } from '@/types/ports'
import { Router } from 'express'

import { PathExistsUseCase } from '@/domain/usecases'
import { adaptFileRoute, adaptRoute } from '../../adapters'
import { makeStreamOutImageComposer } from '../../composers/images-composers/make-image-out-stream'
import { existsSync } from 'fs'
import QRLogo from 'qrcode';

import path from 'path'
import { makeStreamOutQrCodeComposer } from 'app/composers/images-composers/make-qrcode-out-stream'

const Images = Router()

// Objeto que contain todas as rotas de produtos
export const PathImages = {
  GET_IMAGE: '/images/:image',
  GET_PROFILE_IMAGE: '/images/profile/:image',
  GET_BANNER_IMAGE: '/images/banner/:image',
  GET_QRCODE_IMAGE: '/images/qrcode/:username',
  GET_FAVICON: '/images/fav/:image',
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
  PathImages.GET_FAVICON,
  async (req, res, next) => {
    // Constrói o caminho da imagem

    const { image } = req.params

    const imagePath = path.join(
      process.cwd(),
      'public',
      image
    )

    console.log(imagePath)

    if (!existsSync(imagePath)) {
      return res.sendStatus(404).end()
    }

    console.log(image)
    req.query.path = imagePath

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

Images.get(
  PathImages.GET_QRCODE_IMAGE,
  async (req, res) => {
    const { username } = req.params
    const site = `${process.env.URL}/${username}`

    // enviar qrcode para o cliente em formato de stream
    res.type('png')
    res.setHeader('Content-Disposition', `attachment; filename=${username}.png`)

    return await QRLogo.toFileStream(res, site, {
      width: 300,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    })
  }
)

export default Images

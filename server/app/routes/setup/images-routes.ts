import { adaptFileRoute } from '@/adapters';
import { makeImageOutGenericComposer, makeStreamOutImageComposer } from '@/composers/images-composers';
import { Router } from 'express';
import { existsSync } from 'fs';
import path from 'path';
import QRLogo from 'qrcode';



const Images = Router()

// Objeto que contain todas as rotas de produtos
export const PathImages = {
  GET_IMAGE: '/images/:image', // 
  GET_EVENT_IMAGE: '/images/event/:image',
  GET_EXPOSITION_IMAGE: '/images/exposition/:image',
  GET_WORKSHOP_IMAGE: '/images/workshop/:image',
  GET_PARTICIPATION_IMAGE: '/images/participation/:image',
  GET_PROFILE_IMAGE: '/images/profile/:image', //
  GET_PROJECT_IMAGE: '/images/project/:image', //
  GET_BANNER_IMAGE: '/images/banner/:image', //
  GET_QRCODE_IMAGE: '/images/qrcode/:username', //
  GET_FAVICON: '/images/fav/:image', //
}

const makePathImage = (image, folder) => {
  const imagePath = path.join(
    process.env.PATH_PRODUCTS,
    process.env.HASH_KEY,
    folder,
    image
  )

  if (!existsSync(imagePath)) return null

  return imagePath
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
  PathImages.GET_PROJECT_IMAGE,
  async (req, res, next) => {
    // Constrói o caminho da imagem

    const { image } = req.params

    const imagePath = makePathImage(image, 'editais')

    if (!imagePath) {
      return res.sendStatus(404).end()
    }

    req.query.path = imagePath
    req.params.path = imagePath

    next()
  },
  adaptFileRoute(makeStreamOutImageComposer())
)

Images.get(
  PathImages.GET_PROJECT_IMAGE,
  async (req, res, next) => {
    // Constrói o caminho da imagem

    const { image } = req.params

    const imagePath = makePathImage(image, 'editais')

    if (!imagePath) {
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
  adaptFileRoute(makeImageOutGenericComposer())
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

import { left, PromiseEither, right } from '@/shared/either'
import assert from 'assert'
import { existsSync, ReadStream } from 'fs'

import { NotFoundProductError } from '../errors'
import { UseCase } from '../ports/use-case'
import { CreateReadStream } from '../utils/create-read-stream/create-read-stream'
import path from 'path'

export class GetImageGenericUseCase implements UseCase<Params, Stream> {
    folders = [
        'editais',
        'logos_instituicoes',
        'perfil/foto_banner',
        'perfil/foto_perfil',
        'perfil',
        'portfolio/audiovisual',
        'portfolio/eventos',
        'portfolio/exposicoes',
        'portfolio/ficha_tecnica',
        'portfolio/imagens',
        'portfolio/literatura',
        'portfolio/musicas',
        'portfolio/participacao',
        'portfolio/programacao',
        'portfolio'
    ]

    paths: string[] = []

    constructor(
        private readonly StreamUseCase: CreateReadStream // eslint-disable-line
    ) {
        const __DEFAULT__ = path.join(process.env.PATH_PRODUCTS, process.env.HASH_KEY)

        this.paths = this.folders.map(folder => path.join(__DEFAULT__, folder))
    }

    async makePaths(image: string) {
        const existPathImage = this.paths
            .map(folder => path.join(folder, image))
            .filter(folder => existsSync(folder))

        if (existPathImage.length === 0) return null

        return existPathImage[0]
    }

    async execute({ image, encoding = null }: Params): PromiseEither<Stream, Error> {
        assert(image, 'image is required')

        const makePathImage = await this.makePaths(image)

        if (!makePathImage || !existsSync(makePathImage)) {
            return right(new NotFoundProductError('Image not found'))
        }

        const stream = await this.StreamUseCase.run({ path: makePathImage, encoding })

        if (stream.isRight()) {
            return right(stream.value)
        }
        // Retorna a stream para o pipe(res)
        return left(stream.value)
    }
}

type Stream = {
    size: number
    stream: ReadStream
}

type Params = {
    image: string
    encoding?: BufferEncoding
}

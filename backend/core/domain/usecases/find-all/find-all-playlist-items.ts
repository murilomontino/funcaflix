import { GetterPlaylistTVPrograms } from '@/domain/entities'
import { GetterTVPrograms } from '@/domain/entities/getters/getter-tv-programs'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterTVPrograms } from '@/types/getters'

import { UseCase } from '../ports/use-case'

type Response = {
  id: number
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  playlistId: string
  items: IGetterTVPrograms[]
}

export class FindAllPlaylistAndItemsUseCase implements UseCase<unknown, Response[]> {
  constructor(
    private readonly getterTVPrograms: UseCase<unknown, GetterTVPrograms[]>,
    private readonly getterPlaylistTVPrograms: UseCase<unknown, GetterPlaylistTVPrograms[]>
  ) {}

  async execute(): PromiseEither<Response[], Error> {
    const playlists = await this.getterPlaylistTVPrograms.execute(null)

    if (playlists.isRight()) return right(new Error('Erro em Gerar as Playlists'))

    const tvProgramsItems: Response[] = []

    for await (const playlist of playlists.value) {
      const programs = await this.getterTVPrograms.execute(null, {
        playlistId: playlist.playlistId,
      })

      const items = programs.isLeft() ? programs.value : []

      tvProgramsItems.push({
        id: playlist.id,
        title: playlist.title,
        description: playlist.description,
        playlistId: playlist.playlistId,
        thumbnail: playlist.thumbnail,
        publishedAt: playlist.publishedAt,
        items,
      } as Response)
    }

    return left(tvProgramsItems)
  }
}

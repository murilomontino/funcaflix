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

type Props = {
  category: string | string[]
  subCategory: string | string[]
}

export class FindAllPlaylistAndItemsUseCase implements UseCase<unknown, Response[]> {
  constructor(
    private readonly getterTVPrograms: UseCase<unknown, GetterTVPrograms[]>,
    private readonly getterPlaylist: UseCase<unknown, GetterPlaylistTVPrograms[]>
  ) {}

  /**
   * It gets all the playlists, then for each playlist it gets all the programs,
   * then it returns an array of objects containing the playlist and the programs
   * @param {Props}  - Props - The parameters that will be passed to the function.
   * @returns An array of objects with the following structure:
   */
  async execute({ category, subCategory }: Props): PromiseEither<Response[], Error> {
    const playlists = await this.getterPlaylist.execute({ category })

    if (playlists.isRight()) return right(new Error('Erro em Gerar as Playlists'))

    const tvProgramsItems: Response[] = []

    for await (const playlist of playlists.value) {
      const programs = await this.getterTVPrograms.execute(
        { subCategory },
        {
          playlistId: playlist.playlistId,
        }
      )

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

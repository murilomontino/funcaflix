import { describe, it, beforeAll, expect } from 'vitest'

import { build, db } from '../../../../../database'
import { GetterProjects } from '../../entities'

import { FindAllNewestAudioVisual } from '..'

describe('Verificação de caso de uso com bd', () => {
  beforeAll(async () => {
    await build()
  })

  it('Deve retornar todos os audiovisuais mais recentes', async () => {
    const newestProducts = new FindAllNewestAudioVisual()

    const result = await newestProducts.execute(
      {},
      {
        category: '1',
      }
    )

    expect(result).toBeTruthy()
  })
  it('Deve retornar todos os projetos ativos', async () => {
    const newestProjects = await db.ModelProject.findAll({
      where: {
        status: 1,
      },
    })

    const mapProjects = newestProjects.map((project) =>
      GetterProjects.build(project.get()).params()
    )

    expect(mapProjects).toBeTruthy()
  })
})

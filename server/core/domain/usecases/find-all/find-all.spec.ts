import { describe, it, beforeAll, expect } from 'vitest'

import { build, db } from 'mapacultural-database'

import { GetterProjects } from '../../entities'

describe('Verificação de caso de uso com bd', () => {
	beforeAll(async () => {
		await build()
	})

	// it('Deve retornar todos os audiovisuais mais recentes (Integration)', async () => {
	//   const newestProducts = new FindAllNewestAudioVisual()

	//   const result = await newestProducts.execute(
	//     {},
	//     {
	//       category: '1',
	//     }
	//   )

	//   expect(result.isLeft()).toBeTruthy()
	// })
	it('Deve retornar todos os projetos ativos (Integration)', async () => {
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

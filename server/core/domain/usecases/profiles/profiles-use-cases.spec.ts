import { describe, it, expect } from 'vitest'

import { left, PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'

import { CulturalProfileRepository } from '../../repositories/cultural-profiles-repository/cultural-profile.interface'
import { FindByIdProfileUseCase } from './find-cultural-profiles-use-case'

class CulturalProfileRepositoryStub {
	async findById(id: number): PromiseEither<IGetterCulturalProfile, Error> {
		return Promise.resolve(
			left({
				id: id,
			} as IGetterCulturalProfile)
		)
	}
}

const makeSut = () => {
	const culturalProfileRepositoryStub = new CulturalProfileRepositoryStub()
	const sut = new FindByIdProfileUseCase(
		culturalProfileRepositoryStub as CulturalProfileRepository
	)
	const id = 1
	return {
		sut,
		id,
	}
}

describe('Verificação de caso de uso profiles use case', () => {
	it('Deve retornar um perfil cultural (Unitário)', async () => {
		const { sut, id } = makeSut()

		const result = await sut.execute(null, {
			id,
		})

		expect(result.isLeft()).toBeTruthy()

		if (result.isLeft()) {
			expect(result.value.id).toEqual(id)
		}
	})

	it('Deve retornar um erro caso o id não seja informado (Unitário)', async () => {
		const { sut } = makeSut()

		const result = await sut.execute(null, {
			id: null,
		})

		expect(result.isRight()).toBeTruthy()
	})
})

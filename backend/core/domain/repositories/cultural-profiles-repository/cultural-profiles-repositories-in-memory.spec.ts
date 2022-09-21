import { describe, it, expect } from 'vitest'

import { CulturalProfileRepositoryInMemory } from './cultural-profiles-repositories-in-memory'

const sut = () => {
  const culturalProfileRepository = new CulturalProfileRepositoryInMemory()
  return {
    repository: culturalProfileRepository,
  }
}

describe('Testes unitários de repositório em memória', () => {
  it('Deve estar definido', async () => {
    const { repository } = sut()
    const result = await repository.findAllByCity()

    expect(result.isLeft()).toBe(true)
    expect(result.value[0]).toEqual({
      city: expect.any(String),
      items: expect.any(Array),
    })
  })
})

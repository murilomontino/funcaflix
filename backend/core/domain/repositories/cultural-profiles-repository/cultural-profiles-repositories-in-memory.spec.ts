import { describe, expect, it } from 'vitest'

import { InMemoryCulturalProfileRepository } from "./in-memory-cultural-profiles-repositories"

const sut = () => {
  const culturalProfileRepository = new InMemoryCulturalProfileRepository()
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

import { TypeDoc } from '@/types/ports'
import { build } from 'mapacultural-database'
import { describe, it, expect, beforeAll } from 'vitest'

import { PathExistsUseCase } from './paths-exists-use-case'

describe('Integration Tests Paths Images Exists', () => {
  beforeAll(async () => {
    await build()
  })

  it('should return true if image exists (Integration)', async () => {
    const pathUseCase = new PathExistsUseCase()
    const imagePath = await pathUseCase.execute({
      id: '7453cd03-2909-498a-9092-1cf5e5ccd777',
      type: TypeDoc.CAPA,
    })

    expect(imagePath.isLeft()).toBeTruthy()
  })

  it('should return true if image of profile exists (Integration)', async () => {
    const pathUseCase = new PathExistsUseCase()
    const imagePath = await pathUseCase.execute({
      id: '5f5503688da0b',
      type: TypeDoc.IMG_PROFILE,
    })

    expect(imagePath.isLeft()).toBeTruthy()
  })
})

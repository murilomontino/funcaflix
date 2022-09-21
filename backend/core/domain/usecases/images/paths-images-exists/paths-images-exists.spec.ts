import { build } from 'mapacultural-database'
import { describe, it, expect, beforeAll } from 'vitest'

import { PathImageExistsUseCase } from './paths-images-exists'

describe('Integration Tests Paths Images Exists', () => {
  beforeAll(async () => {
    await build()
  })

  it('should return true if image exists', async () => {
    const pathUseCase = new PathImageExistsUseCase()
    const imagePath = await pathUseCase.execute({ image: '7453cd03-2909-498a-9092-1cf5e5ccd777' })

    expect(imagePath.isLeft()).toBeTruthy()
  })
})

import { database } from '@/database'
import { describe, it, expect, beforeEach, beforeAll } from 'vitest'

import { CulturalProfileRepositorySequelize } from './cultural-profile-repository-sequelize'

describe('Unit Test Cultural Profile Repository', () => {
  let instance: CulturalProfileRepositorySequelize

  beforeAll(async () => {
    await database.sync()
  })

  beforeEach(() => {
    instance = new CulturalProfileRepositorySequelize()
  })

  it('should instance of CulturalProfileRepositor', () => {
    expect(instance).toBeInstanceOf(CulturalProfileRepositorySequelize)
  })

  it('should return not error find all by city', async () => {
    const result = await instance.findAllByCity()
    expect(result.isLeft()).toBeTruthy()
  })
  it('should return not error find all by segment', async () => {
    const result = await instance.findAllBySegment()
    expect(result.isLeft()).toBeTruthy()
  })
  it('should return not error find all by segment', async () => {
    const result = await instance.findAllBySegment()
    expect(result.value[0]).toEqual({
      segment: expect.any(String),
      items: expect.any(Array),
    })
  })
})

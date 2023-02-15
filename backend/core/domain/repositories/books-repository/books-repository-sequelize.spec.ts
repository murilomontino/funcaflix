import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import { database } from 'mapacultural-database'

import { BookRepositorySequelize } from './books-repository-sequelize'

describe('Unit Test Cultural Books Repository', () => {
  let instance: BookRepositorySequelize

  beforeAll(async () => {
    await database.sync()
  })

  beforeEach(() => {
    instance = new BookRepositorySequelize()
  })

  it('should be defined', () => {
    expect(instance).toBeDefined()
  })

  it('should be able to find all books', async () => {
    const books = await instance.findAll()
    expect(books.isLeft()).toBeTruthy()
  })

})

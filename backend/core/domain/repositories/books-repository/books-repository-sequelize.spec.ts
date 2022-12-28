import { database } from 'mapacultural-database'
import { describe, it, expect, beforeEach, beforeAll } from 'vitest'

import { BookRepositorySequelize } from './books-repository-sequelize'

describe('Unit Test Cultural Profile Repository', () => {
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

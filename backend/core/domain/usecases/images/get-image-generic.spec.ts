import { describe, expect, it } from 'vitest'

import { GetImageGenericUseCase } from './get-image-generic'

import {
  CreateReadStreamUseCase,
} from '@/domain/usecases'

const makeSut = () => {
  const sut = new GetImageGenericUseCase(
    new CreateReadStreamUseCase()
  )
  return {
    sut
  }
}

describe('Unit Test Get Image Generic', () => {
  it('should instance of get image generic use case', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(GetImageGenericUseCase)
  })
  it('should return a stream', async () => {
    const { sut } = makeSut()
    const stream = await sut.execute({ image: '1a73ea1f-e06b-46f7-b277-72371e95e875.capa.webp' })
    expect(stream.isLeft()).toBeTruthy()
  })
})

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGetterCulturalProfile } from '@/types/getters'
import { SocialNetwork } from '@/types/setters'
import { faker } from '@faker-js/faker'
import { describe, it, expect } from 'vitest'

import { GetterCulturalProfiles } from '.'

const sut = () => {
  const profile = {
    id: faker.datatype.uuid(),
    idUser: faker.datatype.uuid(),
    document: faker.word.preposition(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    thumbnail: faker.image.imageUrl(),
    about: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    mediaSocial: {
      type: SocialNetwork.FACEBOOK,
      link: faker.internet.url(),
    },
    updatedAt: faker.date.past(),
  } as IGetterCulturalProfile

  return {
    profile,
  }
}

describe('Testes de entidades Getters', () => {
  it('Os parâmetros após o build deve ser iguais aos repassados em GetterCulturalProfiles', () => {
    const { profile } = sut()

    const result = GetterCulturalProfiles.build(profile)

    expect(result.params()).toEqual(profile)
  })

  it('Caso um parâmetro não seja repassado, deve ser retornado undefined', () => {
    const { profile } = sut()
    const { id, ...rest } = profile
    const result = GetterCulturalProfiles.build(rest as any)
    const result2 = GetterCulturalProfiles.build({} as any)
    expect(result.params().id).toBeUndefined()
    expect(result2.params().id).toBeUndefined()
  })
})

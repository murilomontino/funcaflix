import { IEventsRepository } from '@/domain/repositories'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterEvent } from '@/types/getters'

import { UseCase } from '../ports/use-case'

export class FindAllEventsUseCase implements UseCase<unknown, IGetterEvent[]> {

  constructor(
    private readonly repository: IEventsRepository,
  ) { }

  async execute(): PromiseEither<IGetterEvent[], Error> {
    const eventsOrErr = await this.repository.findAll()

    if (eventsOrErr.isRight()) {
      return right(eventsOrErr.value)
    }

    return left(eventsOrErr.extract())
  }
}

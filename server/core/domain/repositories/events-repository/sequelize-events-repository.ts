import { GetterEvent } from '@/domain/entities/getters/getter-event';
import promiseErrorHandler from '@/helpers/error-handler';
import { left, PromiseEither, right } from '@/shared/either';
import { IGetterEvent } from '@/types/getters';
import { database } from 'mapacultural-database';
import { IEventsRepository } from './events-repository.interface';
import { QUERY_EVENTS, QUERY_EVENTS_BY_ID } from './queries';

function generateEvent(event: any): IGetterEvent {

    if (!event) {
        throw new Error('Event not found')
    }

    if (event?.get) {
        const eventModel = event.get({ plain: true })
        return GetterEvent.build(eventModel).params()
    }

    return GetterEvent.build(event).params()
}

export class SequelizeEventsRepository implements IEventsRepository {

    async findAll(): PromiseEither<IGetterEvent[], Error> {
        return database.transaction(async (transaction) => {
            const [err, query] = await promiseErrorHandler(
                database.query(QUERY_EVENTS, { transaction })
            );

            const [model] = query;

            if (err) {
                return right(err);
            }

            const events = model.map(generateEvent);

            return left(events);
        });
    }

    async findAllEventsByUserID(id: number): PromiseEither<IGetterEvent[], Error> {
        return database.transaction(async (transaction) => {
            const [err, query] = await promiseErrorHandler(
                database.query(QUERY_EVENTS_BY_ID(id), { transaction })
            );

            const [model] = query;

            if (err) {
                return right(err);
            }

            const events = model.map(generateEvent);

            return left(events);
        });
    }
}

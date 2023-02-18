import { GetterEvent } from '@/domain/entities/getters/getter-event';
import { MissingParamError } from '@/domain/usecases/errors';
import promiseErrorHandler from '@/helpers/error-handler';
import { left, PromiseEither, right } from '@/shared/either';
import { IGetterEvent } from '@/types/getters';
import type { Sequelize } from 'sequelize';

import { ErrorQueryDatabase } from '../errors/error-query-database';
import { IEventsRepository } from './events-repository.interface';
import { QUERY_EVENTS, QUERY_EVENTS_BY_ID, QUERY_EVENTS_BY_USER_ID } from './queries';

export async function generateEvent(event: any): Promise<IGetterEvent> {

    if (!event) {
        throw new MissingParamError({ parameter: 'event' })
    }

    if (event?.get) {
        const eventModel = event.get({ plain: true })
        return GetterEvent.build(eventModel).params()
    }

    return GetterEvent.build(event).params()
}

export class SequelizeEventsRepository implements IEventsRepository {

    constructor(
        private readonly database: Sequelize
    ) { }

    async findEventByID(id: number): PromiseEither<IGetterEvent, Error> {
        return this.database.transaction(async (transaction) => {
            const [err, query] = await promiseErrorHandler(
                this.database.query(QUERY_EVENTS_BY_ID(id), { transaction })
            );

            if (err) {
                return right(new ErrorQueryDatabase(undefined, { cause: err }));
            }

            const [model] = query;

            const event = await generateEvent(model);

            return left(event);
        });
    }

    async findAll(): PromiseEither<IGetterEvent[], Error> {
        return this.database.transaction(async (transaction) => {
            const [err, query] = await promiseErrorHandler(
                this.database.query(QUERY_EVENTS, { transaction })
            );

            if (err) {
                return right(new ErrorQueryDatabase(undefined, { cause: err }));
            }

            const [model] = query;

            const events = await Promise.all([...model.map(generateEvent)]);

            return left(events);
        });
    }

    async findAllEventsByUserID(id: number): PromiseEither<IGetterEvent[], Error> {
        return this.database.transaction(async (transaction) => {
            const [err, query] = await promiseErrorHandler(
                this.database.query(QUERY_EVENTS_BY_USER_ID(id), { transaction })
            );

            if (err) {
                return right(new ErrorQueryDatabase(undefined, { cause: err }));
            }

            const [model] = query;

            const events = await Promise.all([...model.map(generateEvent)]);

            return left(events);
        });
    }
}

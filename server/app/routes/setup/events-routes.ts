import { adaptRoute } from '@/adapters'
import {
	makeGetAllEventsByFinancialResourceComposers,
	makeGetAllEventsByUserIDComposers,
	makeGetAllEventsComposers,
	makeGetEventsByIDComposers,
} from '@/composers/events-composers'
import { Router } from 'express'

const Events = Router()

// Objeto que contém todas as rotas de produtos
export const PathEvents = {
	GET_EVENT_BY_ID: '/events/:id',
	GET_EVENTS: '/events',
	GET_EVENTS_BY_USER: '/events/user/:idUser',
	GET_EVENTS_BY_FINANCIAL_RESOURCES: '/events/resources/:financialResources',
}

Events.get(PathEvents.GET_EVENTS, adaptRoute(makeGetAllEventsComposers()))
Events.get(PathEvents.GET_EVENT_BY_ID, adaptRoute(makeGetEventsByIDComposers()))
Events.get(
	PathEvents.GET_EVENTS_BY_USER,
	adaptRoute(makeGetAllEventsByUserIDComposers())
)

Events.get(
	PathEvents.GET_EVENTS_BY_FINANCIAL_RESOURCES,
	adaptRoute(makeGetAllEventsByFinancialResourceComposers())
)

export default Events

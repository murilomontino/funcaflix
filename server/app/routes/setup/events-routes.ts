import { adaptRoute } from '@/adapters'
import { makeGetAllEventsComposers } from '@/composers/events-composers'
import { Router } from 'express'

const Events = Router()

// Objeto que contém todas as rotas de produtos
export const PathEvents = {
	GET_EVENT_BY_ID: '/events/:id',
	GET_EVENTS: '/events',
	GET_EVENTS_BY_USER: '/events/:idUser/:id',
}

Events.get(PathEvents.GET_EVENTS, adaptRoute(makeGetAllEventsComposers()))
// Events.get(PathEvents.GET_EVENT_BY_ID, adaptRoute(() => { }))
// Events.get(PathEvents.GET_EVENTS_BY_USER, adaptRoute(() => { }))

export default Events

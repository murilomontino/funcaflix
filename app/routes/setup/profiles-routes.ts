import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { adaptRoute } from 'app/adapters'
import {
  makeGetAudioVisualByIDProfileComposer,
  makeGetEventsByIDProfileComposer,
  makeGetLiteratureByIDProfileComposer,
  makeGetMusicsByIDProfileComposer,
  makeGetProfileByCityComposer,
  makeGetProfileBySearchComposer,
  makeGetProfileBySegmentComposer,
  makeGetProfileComposer,
  makeGetWorkshopsByIDProfileComposer
} from 'app/composers/profiles-composers'
import { Router } from 'express'



const Profiles = Router()

export const PATHS = {
  GET_PROFILE: '/profiles/:id',
  GET_SEGMENTS: '/profiles/segments',
  GET_CITIES: '/profiles/cities',
  GET_ITEMS_BY_SEGMENT: '/profiles/segment/:segment',
  GET_ITEMS_BY_CITY: '/profiles/city/:city',
  SEARCH: '/profiles/search/:search',
  EVENTS: '/profiles/:idUser/events',
  LITERATURE: '/profiles/:idUser/literature',
  AUDIOVISUAL: '/profiles/:idUser/audiovisual',
  WORKSHOPS: '/profiles/:idUser/workshops',
  MUSICS: '/profiles/:idUser/musics'
}

Profiles.get(PATHS.GET_SEGMENTS, async (req, res) => {
  const repository = new CulturalProfileRepositorySequelize()
  const segmentsOrErr = await repository.findGroupBySegment()

  if (segmentsOrErr.isRight()) {
    return res.status(404).json({ error: segmentsOrErr.value.message })
  }

  return res.status(200).json(segmentsOrErr.value)

})

Profiles.get(PATHS.GET_CITIES, async (req, res) => {
  const repository = new CulturalProfileRepositorySequelize()
  const citiesOrErr = await repository.findGroupByCity()

  if (citiesOrErr.isRight()) {
    return res.status(404).json({ error: citiesOrErr.value.message })
  }

  return res.status(200).json(citiesOrErr.value)

})

Profiles.get(PATHS.GET_PROFILE, adaptRoute(makeGetProfileComposer()))

Profiles.get(PATHS.GET_ITEMS_BY_SEGMENT, adaptRoute(makeGetProfileBySegmentComposer()))

Profiles.get(PATHS.GET_ITEMS_BY_CITY, adaptRoute(makeGetProfileByCityComposer()))

Profiles.get(PATHS.SEARCH, adaptRoute(makeGetProfileBySearchComposer()))

Profiles.get(PATHS.EVENTS, adaptRoute(makeGetEventsByIDProfileComposer()))

Profiles.get(PATHS.LITERATURE, adaptRoute(makeGetLiteratureByIDProfileComposer()))

Profiles.get(PATHS.AUDIOVISUAL, adaptRoute(makeGetAudioVisualByIDProfileComposer()))

Profiles.get(PATHS.WORKSHOPS, adaptRoute(makeGetWorkshopsByIDProfileComposer()))

Profiles.get(PATHS.MUSICS, adaptRoute(makeGetMusicsByIDProfileComposer()))

export default Profiles

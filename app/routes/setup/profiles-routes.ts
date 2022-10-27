import { adaptRoute } from 'app/adapters'
import { makeGetProfileComposer } from 'app/composers/profiles-composers'
import { Router } from 'express'

const Profiles = Router()

export const PATHS = {
  GET_PROFILE: '/profiles/:id',
}

Profiles.get(PATHS.GET_PROFILE, adaptRoute(makeGetProfileComposer()))

export default Profiles

import React, { useEffect, useState } from 'react'

import CulturalProfilesScreen from '@/screens/cultural-profiles-screen'
import api from '@/services'
import promiseErrorHandler from '@/utils/error-handler'

export default function CulturalProfiles() {
  const [cities, setCities] = useState<string[]>([])
  const [segments, setSegments] = useState<string[]>([])

  const fetchData = async (type: 'segments' | 'cities') => {
    const [err, response] = await promiseErrorHandler(api.get(`/profiles/${type}`))

    if (err) {
      return []
    }

    return response.data
  }

  useEffect(() => {
    fetchData('cities').then((data) => setCities(data))
    fetchData('segments').then((data) => setSegments(data))
  }, [])


  return <CulturalProfilesScreen cities={cities} segments={segments} />
}
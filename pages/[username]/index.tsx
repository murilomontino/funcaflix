// @generated: @expo/next-adapter@2.1.52
import React, { useEffect, useState } from 'react'

import ScreenProfile from '@/screens/profile-screen';
import { useRouter } from 'next/router';
import api from '@/services';
import promiseErrorHandler from '@/utils/error-handler';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)

  const { query: { username } } = useRouter()
  const names = (username as string)?.split('@')

  const id = names?.[names?.length - 1] || null

  const fetchProfile = async () => {
    const [error, response] = await promiseErrorHandler(api.get(`/profiles/${id}`))
    const { data, statusCode } = response.data

    if (error || statusCode !== 200) {
      console.log(error)
      return
    }

    setProfile(data)
  }

  useEffect(() => {
    if (id) {
      fetchProfile().then(() => setLoading(false))
    }

    return () => {
      setProfile(null)
    }

  }, [id])

  if (loading || !id || !profile) return null

  return <ScreenProfile profile={profile} />
}


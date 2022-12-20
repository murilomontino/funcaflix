// @generated: @expo/next-adapter@2.1.52
import React, { useEffect, useState } from 'react'

import ScreenProfile from '@/screens/profile-screen';
import { useRouter } from 'next/router';
import api from '@/services';
import promiseErrorHandler from '@/utils/error-handler';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { query: { username } } = useRouter()
  const names = (username as string)?.split('@')

  const id = names?.[names?.length - 1] || null

  const fetchProfile = async (id: string) => {
    const [error, response] = await promiseErrorHandler(api.get(`/profiles/${id}`))
    const { data, statusCode } = response.data

    if (error || statusCode !== 200) {
      return
    }

    return data;

  }

  useEffect(() => {

    if (id) {
      fetchProfile(id)
        .then((profile) => {
          if (!profile.name) return setError('Profile not found')

          setProfile(profile)

        }).catch((error) => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    return () => {
      setProfile(null)
    }

  }, [id])

  if (error) return (
    <div
      style={{
        height: '80vh',
        width: '100vw'
      }}
      className="d-flex justify-content-center align-items-center">
      <p>Este usuário não completou seu cadastro para visualização!</p>
    </div>
  )

  if (loading || !id || !profile) return null

  return <ScreenProfile profile={profile} username={username as string} />
}


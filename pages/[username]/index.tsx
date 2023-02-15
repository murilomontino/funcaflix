// @generated: @expo/next-adapter@2.1.52
import React from 'react';

import fetchUsernameProfile from '@/api/fetch-username';
import { useRouter } from 'next/router';

import ScreenProfile from '@/screens/profile-screen';

const ErrorComponent = () => (
  <div
    style={{
      height: '80vh',
      width: '100vw'
    }}
    className="d-flex justify-content-center align-items-center">
    <p>Este usuário não completou seu cadastro para visualização!</p>
  </div>
)

export default function ProfilePage() {
  const { query: { username } } = useRouter()
  const names = (username as string)?.split('@')
  const id = names?.[names?.length - 1] || null

  const { data, error, isLoading } = fetchUsernameProfile(id)

  if (error) return <ErrorComponent />

  if (isLoading || !id || !data?.profile) return <React.Fragment />

  return <ScreenProfile profile={data?.profile} username={username as string} />
}


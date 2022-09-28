// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { GetStaticProps } from 'next'

import ScreenProfile from '@/screens/profile-screen'

export default function ProfilePage({ profile }) {
  return <ScreenProfile profile={profile} />
}

export const getStaticPaths = async () => {
  const paths = [
    {
      params: { username: 'murilomontino' },
    },
  ]

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.username) {
    return {
      props: {
        profile: {},
      },
    }
  }

  return {
    props: {
      profile: {
        username: params.username,
      },
    },
    revalidate: 60 * 60 * 24,
  }
}

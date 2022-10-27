import React from 'react'
import image from '@/public/images/oportunidades.jpeg'
import { IGetterCulturalProfile } from '@/types/getters'

import BreadCrumb from '@/components/organism/breadcrumb'

import SimplePage from './SimplePage/SimplePage'

type Props = {
  profile: IGetterCulturalProfile
}

const ProfileScreen = ({ profile }: Props) => {
  return (
    <div>
      <BreadCrumb title={profile.name} image={image} />
      {/* <SimplePage /> */}
    </div>

  )
}

export default ProfileScreen
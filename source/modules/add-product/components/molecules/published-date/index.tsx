import React from 'react'

import HelperText from '@/components/atom/helper-text'
import InputTopic from '@/components/molecule/input-topic'

type Props = {
  startDate: string
  onChangeStartDate: (date: string) => void
  error: string
}

const PublishedDate = ({ onChangeStartDate, startDate, error }: Props) => {
  return (
    <>
      <InputTopic
        topic="Data de Publicação"
        onChangeText={onChangeStartDate}
        value={startDate}
        maxLength={10}
        mask={startDate?.length > 3 ? '99-99-9999' : '9999'}
      />
      <HelperText text={error} visible />
    </>
  )
}

export default PublishedDate

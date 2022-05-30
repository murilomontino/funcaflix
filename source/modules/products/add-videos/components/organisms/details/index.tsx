import React, { useMemo } from 'react'

import { TypesProducts } from '@/types'
import { useFormik } from 'formik'
import * as yup from 'yup'

import SelectDropdown from '@/components/atom/select-dropdown'

import CardInfoVideo from '../../atoms/card-info-video'
import ContainerVideos from '../../molecules/container-videos'
import { Container, ContainerRight } from './styles'

const mapTypesVideo = [
  {
    value: TypesProducts.MP4,
    label: 'MP4',
  },
  {
    value: TypesProducts.LINK,
    label: 'Link',
  },
]

const DetailsVideo = ({ item }) => {
  if (!item) return null

  const initialValues = useMemo(
    () => ({
      type: 0,
      url: '',
      video: null,
    }),
    []
  )

  const validationSchema = yup.object().shape({
    type: yup.number().required(),
    url: yup.string().when('type', {
      is: (type: TypesProducts) => type === TypesProducts.LINK,
      then: yup.string().url().required('Required'),
    }),
    video: yup.mixed().when('type', {
      is: (type: TypesProducts) => type === TypesProducts.MP4,
      then: yup.mixed().required('Required'),
    }),
  })

  const { setFieldValue, values, handleSubmit, errors, isValid } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    },
  })

  return (
    <Container>
      <CardInfoVideo item={item} />
      <ContainerRight>
        <SelectDropdown
          options={mapTypesVideo}
          labelDefault="Tipo de Video"
          onChangeSelect={(value) => setFieldValue('type', value)}
        />
        <ContainerVideos
          type={values.type}
          errors={errors}
          handleSubmit={handleSubmit}
          isValid={isValid}
          setFieldValue={setFieldValue}
          values={values}
        />
      </ContainerRight>
    </Container>
  )
}

export default DetailsVideo

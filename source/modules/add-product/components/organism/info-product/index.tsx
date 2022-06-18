import React, { useEffect, useMemo } from 'react'

import { IFormProductValues } from '@/modules/add-product/type'
import { mapSubCategory } from '@/types/map-dropdown'
import { useFormikContext } from 'formik'

import GetImageButton from '@/components/atom/get-image-button'
import InputTextArea from '@/components/molecule/input-text-area'
import SelectOptionsDropdown from '@/components/molecule/select-options-dropdown'

import { Important } from '../../../styles'
import PublishedDate from '../../molecules/published-date'
import StartAndEndDate from '../../molecules/start-and-end-date'
import { Title, Container } from '../artist/styles'

const Product = () => {
  const { values, setFieldValue, errors } = useFormikContext<IFormProductValues>()

  const onChange = (key: keyof IFormProductValues) => (value: any) => setFieldValue(key, value)

  const type = useMemo(() => mapSubCategory[values.category], [values.category])

  useEffect(() => {
    setFieldValue('publishedDate', '')
  }, [values.category])

  return (
    <Container>
      <Title>Dados do Produto:</Title>
      <Important>* Campos Obrigatórios</Important>
      <GetImageButton
        value={values.thumbnail}
        onChangeValue={onChange('thumbnail')}
        height={values.category != 2 ? 250 : 250}
        width={values.category != 2 ? 400 : 200}
        resizeMode={'stretch'}
      />
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <SelectOptionsDropdown
          visible
          values={values.financialResource}
          message={errors.financialResource}
          type={60}
          onChange={onChange('financialResource')}
          label={'Recursos'}
        />
        <SelectOptionsDropdown
          visible
          message={errors.category}
          values={values.category}
          type={1}
          onChange={onChange('category')}
          label={'Categoria'}
        />

        <SelectOptionsDropdown
          visible
          message={errors.subCategory}
          values={values.subCategory}
          type={type}
          onChange={onChange('subCategory')}
          label={'Sub Categoria'}
        />
      </div>
      <InputTextArea
        height={360}
        maxLength={2400}
        numberLines={10}
        topic="Sobre a Obra"
        requered
        onChangeValue={onChange('about')}
        value={values.about}
        styleViewContainer={{ width: '70%' }}
      />
      {values.category < 4 ? (
        <PublishedDate
          error={errors.publishedDate}
          startDate={values.publishedDate}
          onChangeStartDate={onChange('publishedDate')}
        />
      ) : (
        <StartAndEndDate
          startDate={values.startDate}
          endDate={values.endDate}
          onChangeStartDate={onChange('startDate')}
          onChangeEndDate={onChange('endDate')}
        />
      )}
    </Container>
  )
}

export default Product

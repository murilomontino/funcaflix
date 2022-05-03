import React, { memo, useEffect, useMemo, useState } from 'react'
import { Text, View } from 'react-native'

import DatePickerCustom from '@/components/atom/date-picker'
import GetImageButton from '@/components/atom/get-image-button'
import SelectDropdown from '@/components/atom/select-dropdown'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'

import {
  useFormExhibitionDescription,
  useFormExhibitionEndDate,
  useFormExhibitionFinancialResources,
  useFormExhibitionLocation,
  useFormExhibitionStartDate,
  useFormExhibitionThumbnail,
  useFormExhibitionTitle,
} from '@/forms/Product/product-exhibition/hooks'
import { mapFinancialResources } from '@/forms/Product/types'

import { Important } from '../../../styles'
import { Title, Container } from '../artist/styles'

const Exhibition = () => {
  const [disabled, setDisabled] = useState(true)

  const { location, onChangeLocation } = useFormExhibitionLocation()
  const { title, onChangeTitle } = useFormExhibitionTitle()
  const { endDate, onChangeEndDate } = useFormExhibitionEndDate()
  const { startDate, onChangeStartDate } = useFormExhibitionStartDate()
  const { description, onChangeDescription } = useFormExhibitionDescription()
  const { onChangeFinancialResources } = useFormExhibitionFinancialResources()

  const { thumbnail, onChangeThumbnail } = useFormExhibitionThumbnail()
  const [startDateState, setStartDate] = useState<Date>(() => {
    if (startDate) {
      return new Date(startDate)
    }
    return null
  })
  const [endDateState, setEndDate] = useState<Date>(() => {
    if (endDate.current) {
      return new Date(endDate.current)
    }
    return null
  })

  const onChangeStartDateState = (date: Date) => {
    setStartDate(date)
    onChangeStartDate(date?.toISOString())
  }

  const onChangeEndDateState = (date: Date) => {
    setEndDate(date)
    onChangeEndDate(date?.toISOString())
  }

  const memoDateMinimum = useMemo(() => new Date(startDateState), [startDateState])

  useEffect(() => {
    if (!startDateState) setDisabled(true)
    else setDisabled(false)
  }, [startDateState])

  return (
    <Container>
      <Title>Dados do Exposição:</Title>
      <Important>* Campos Obrigatórios</Important>
      <GetImageButton
        image={thumbnail}
        onChangeImage={onChangeThumbnail}
        height={200}
        width={400}
        resizeMode={'stretch'}
      />

      <SelectDropdown
        options={mapFinancialResources}
        onChangeSelect={onChangeFinancialResources}
        labelDefault={'Recursos'}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 12,
          width: '70%',
          textAlign: 'left',
          color: '#fff',
          textTransform: 'uppercase',
          fontFamily: 'Inter_900Black',
        }}
      >
        Dados da Exposição:
      </Text>
      <InputTopic
        topic="Título"
        onChangeText={onChangeTitle}
        requered
        value={title}
        styleViewContainer={{
          width: '70%',
        }}
      />

      <InputTopic
        topic="Local"
        onChangeText={onChangeLocation}
        requered
        value={location}
        styleViewContainer={{
          width: '70%',
        }}
      />

      <InputTextArea
        height={360}
        maxLength={2400}
        numberLines={10}
        topic="Sobre a Obra"
        requered
        onChangeValue={onChangeDescription}
        value={description}
        styleViewContainer={{ width: '70%' }}
      />
      <View
        style={{
          zIndex: 10,
          flexDirection: 'row',
        }}
      >
        <DatePickerCustom
          topic="Data de Início"
          requered
          onChangeValue={onChangeStartDateState}
          value={startDateState}
          colorIcon={'#000'}
        />
        <DatePickerCustom
          disabled={disabled}
          topic="Data de Fim"
          onChangeValue={onChangeEndDateState}
          minimumDate={memoDateMinimum}
          value={endDateState}
          colorIcon={'#000'}
        />
      </View>
    </Container>
  )
}

export default memo(Exhibition)

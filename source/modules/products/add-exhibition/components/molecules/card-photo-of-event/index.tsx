import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import theme from '@/theme'
import { ExhibitionPhotosTypes } from '@/types'
import { AntDesign } from '@expo/vector-icons'

import CacheImage from '@/components/atom/cache-image'
import DatePicker from '@/components/atom/date-picker'
import DropdownComponent from '@/components/atom/select-dropdown'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'

import { mapTypeExhibitionPhoto } from '@/forms/Product/types'

import useHooks from './hooks'
import { Container, ContainerButtonIcon } from './styles'

import colors from '@/global/colors'

type Props = {
  uri: string
  title: string
  date: string
  description: string
  typeOfPhoto: ExhibitionPhotosTypes
  error: boolean
  onRemovePhoto?: () => void
  onChangeAttrTitlePhoto: (value: string) => void
  onChangeAttrDatePhoto: (value: Date) => void
  onChangeAttrDescriptionPhoto: (value: string) => void
  onChangeAttrTypePhoto: (value: ExhibitionPhotosTypes) => void
  onChangeAttrErrorPhoto: (value: boolean) => void
  photoValidator: (value: number) => void
}

const CardPhotoOfEvent = ({
  onChangeAttrTitlePhoto,
  onChangeAttrDatePhoto,
  onChangeAttrDescriptionPhoto,
  onChangeAttrTypePhoto,
  onChangeAttrErrorPhoto,
  onRemovePhoto,
  title,
  photoValidator,
  description,
  typeOfPhoto,
  uri,
  date,
  error,
}: Props) => {
  const {
    validatedPhoto,
    dateState,
    descriptionState,
    setDate,
    setDescription,
    setTitle,
    setTypeOfPhoto,
    titleState,
    typeOfPhotoState,
  } = useHooks({
    defaultDate: date,
    defaultDescription: description,
    defaultTitle: title,
    defaultTypeOfPhoto: typeOfPhoto,
  })

  const [err, setErr] = useState(error)

  const refDropDown = useRef()
  const hoverDropdown = useHover(refDropDown)

  const zIndexDropdown = useMemo(() => {
    if (hoverDropdown) {
      return 10
    }
    return 1
  }, [hoverDropdown])

  const refDate = useRef()
  const hoverDate = useHover(refDate)

  const zIndexDate = useMemo(() => {
    if (hoverDate) {
      return 10
    }
    return 2
  }, [hoverDate])

  useEffect(() => {
    setErr(() => {
      if (validatedPhoto) {
        photoValidator(1)
      } else {
        photoValidator(-1)
      }
      return validatedPhoto
    })
    onChangeAttrErrorPhoto(validatedPhoto)
  }, [validatedPhoto])

  const onChangeTitle = (value: string) => {
    setTitle(value)
    onChangeAttrTitlePhoto(value)
  }

  const onChangeTypeOfPhoto = (value: ExhibitionPhotosTypes) => {
    setTypeOfPhoto(value)
    onChangeAttrTypePhoto(value)
  }

  const onChangeDate = (value: Date) => {
    setDate(value)
    onChangeAttrDatePhoto(value)
  }

  const onChangeDescription = (value: string) => {
    setDescription(value)
    onChangeAttrDescriptionPhoto(value)
  }

  return (
    <Container
      style={[
        {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 3.84,
          elevation: 5,
        },
        !err && {
          borderWidth: 1,
          borderColor: colors.redPrimary,
        },
      ]}
    >
      <ContainerButtonIcon onPress={onRemovePhoto}>
        <AntDesign name="close" size={theme.FONTS.SIZE.SMALL} color={theme.COLORS.ICON_SECONDARY} />
      </ContainerButtonIcon>
      <CacheImage uri={uri} resizeMode={'cover'} width={'100%'} height={160} />
      <View
        ref={refDropDown}
        style={{
          zIndex: zIndexDropdown,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DropdownComponent
          labelDefault="Tipo de Foto"
          onChangeSelect={onChangeTypeOfPhoto}
          options={mapTypeExhibitionPhoto}
        />
      </View>
      <InputTopic
        requered
        onChangeText={onChangeTitle}
        value={titleState}
        placeholder={'Título da foto*'}
        topic=""
      />

      <InputTextArea
        topic=""
        placeholder="Descrição da foto"
        value={descriptionState}
        onChangeValue={onChangeDescription}
        height={80}
        maxLength={1500}
        numberLines={4}
      />
      <View
        ref={refDate}
        style={{
          zIndex: zIndexDate,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DatePicker
          topic=""
          onChangeValue={onChangeDate}
          value={dateState}
          colorIcon={theme.COLORS.ICON_SECONDARY}
        />
      </View>
    </Container>
  )
}

export default CardPhotoOfEvent

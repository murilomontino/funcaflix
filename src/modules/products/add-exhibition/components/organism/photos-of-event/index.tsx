import React, { memo, useCallback, useMemo } from 'react'
import { View } from 'react-native'

import { ExhibitionPhotosTypes } from '@/types'

import Button from '@/components/atom/button'

import {
  useFormExhibitionAttrsPhotos,
  useFormExhibitionFiles,
  useSubmitFormExhibition,
} from '@/forms/Product/product-exhibition/hooks'

import { GetFileButton } from '../../atoms/get-file-button'
import CardPhotoOfEvent from '../../molecules/card-photo-of-event'
import { Container } from '../artist/styles'

import { useSize } from '@/hooks/use-size'

const PhotosOfEvent = () => {
  const {
    size,
    SCREEN_LARGE_SIZE,
    SCREEN_SMALLER_THAN_LARGE_SIZE,
    SCREEN_SMALLER_THAN_MEDIUM_SIZE,
  } = useSize()

  const WIDTH_CARD = useMemo(() => {
    if (SCREEN_LARGE_SIZE) {
      return size.width / 5
    }
    if (SCREEN_SMALLER_THAN_MEDIUM_SIZE) {
      return size.width / 2
    }
    if (SCREEN_SMALLER_THAN_LARGE_SIZE) {
      return size.width / 4
    }

    return size.width / 3
  }, [size])

  const { mapFiles, onChangeFile, onRemovePhoto } = useFormExhibitionFiles()

  const { onSubmit } = useSubmitFormExhibition()

  const {
    onChangeAttrDatePhoto,
    onChangeAttrDescriptionPhoto,
    onChangeAttrTitlePhoto,
    onChangeAttrTypePhoto,
    onChangeAttrErrorPhoto,
    photoValidator,
  } = useFormExhibitionAttrsPhotos()

  const renderMapPhotos = useCallback(() => {
    return mapFiles.map((photo, index) => (
      <View
        key={photo.get('id') as string}
        style={{
          zIndex: 999 - index,
          minWidth: WIDTH_CARD,
          maxWidth: WIDTH_CARD,
          height: 460,
          margin: 8,
        }}
      >
        <CardPhotoOfEvent
          uri={photo.get('uri') as string}
          title={photo.get('titulo') as string}
          onChangeAttrTitlePhoto={onChangeAttrTitlePhoto(
            photo.get('id') as string
          )}
          description={photo.get('descricao') as string}
          onChangeAttrDescriptionPhoto={onChangeAttrDescriptionPhoto(
            photo.get('id') as string
          )}
          date={photo.get('data') as string}
          onChangeAttrDatePhoto={onChangeAttrDatePhoto(
            photo.get('id') as string
          )}
          typeOfPhoto={photo.get('tipo_de_foto') as ExhibitionPhotosTypes}
          onChangeAttrTypePhoto={onChangeAttrTypePhoto(
            photo.get('id') as string
          )}
          onRemovePhoto={onRemovePhoto(photo.get('id') as string)}
          error={photo.get('error') as boolean}
          onChangeAttrErrorPhoto={onChangeAttrErrorPhoto(
            photo.get('id') as string
          )}
          photoValidator={photoValidator}
        />
      </View>
    ))
  }, [mapFiles])

  return (
    <Container>
      <GetFileButton
        onChangeFiles={onChangeFile}
        type={['image/jpeg', 'image/jpg', 'image/png']}
        multiple
        message="Selecione as fotos"
      />

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {renderMapPhotos()}
      </View>
      <Button text="Enviar" onPress={onSubmit} />
    </Container>
  )
}

export default memo(PhotosOfEvent)

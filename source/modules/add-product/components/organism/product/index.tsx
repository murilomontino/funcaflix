import React, { useEffect, useMemo } from 'react'

import { IFormProductValues } from '@/modules/add-product/type'
import { EnumCategory } from '@/types/map-dropdown'
import { useFormikContext } from 'formik'

import DragDrop from '@/components/atom/drag-drop'
import HelperText from '@/components/atom/helper-text'
import SelectGenres from '@/components/molecule/select-genres'

import { ContainerSendForm } from './styles'

const FILEs = {
  [EnumCategory.Audio]: ['MP3', 'WAV'],
  [EnumCategory.AudioVisual]: ['MP4', 'AVI', 'FLV', 'MOV', 'WMV'],
  [EnumCategory.Book]: ['PDF'],
  default: ['JPEG', 'PNG', 'JPG', 'WEBP'],
}

const SendExhibition = () => {
  const { values, setFieldValue, errors } = useFormikContext<IFormProductValues>()
  const [files, setFiles] = React.useState<File[]>([])
  const onChange = (key: keyof IFormProductValues) => (value: any) => setFieldValue(key, value)
  useEffect(() => {
    console.log(files)
  }, [files])
  const fileType = useMemo(() => {
    if (values.category) {
      return FILEs[values.category] || FILEs.default
    }
    return FILEs.default
  }, [values.category])

  const isMultiple = useMemo(() => {
    if (values.category == EnumCategory.Book || values.category == EnumCategory.AudioVisual) {
      return false
    }
    return true
  }, [values.category])

  return (
    <ContainerSendForm>
      {values.category != 0 ? (
        <DragDrop
          onChangeFile={(file) => setFiles(file)}
          fileTypes={fileType}
          multiple={isMultiple}
        />
      ) : (
        <HelperText
          text="Selecione uma Categoria para Poder Habilitar o envio do Arquivo"
          visible
        />
      )}
      <SelectGenres
        category={values.category}
        values={values.genres}
        onChangeValues={onChange('genres')}
      />
    </ContainerSendForm>
  )
}

export default SendExhibition

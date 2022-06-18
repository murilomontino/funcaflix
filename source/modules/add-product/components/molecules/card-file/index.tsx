import React, { useMemo } from 'react'

import { IDocumentsProducts, IFormProductValues } from '@/modules/add-product/type'
import { FontAwesome } from '@expo/vector-icons'
import { ErrorMessage, useFormikContext } from 'formik'

import HelperText from '@/components/atom/helper-text'
import PreviewElementFile from '@/components/atom/preview'
import InputField from '@/components/molecule/input-field'
import SelectOptionsDropdown from '@/components/molecule/select-options-dropdown'

import { Card, ContainerButtonClose } from './styles'

type Props = {
  index: number
  handleClose: (index) => void
  name: keyof IFormProductValues
  type?: number
}

const CardFile = ({ index, handleClose, name, type = 10 }: Props) => {
  const { values, setFieldValue, errors, getFieldMeta } = useFormikContext<IFormProductValues>()

  const element = useMemo(() => `${name}.${index}.type`, [name, index])
  const meta = getFieldMeta<IDocumentsProducts>(`${name}.${index}`)
  const onChange = (key: string) => (value: any) => setFieldValue(key, value)

  const errType = useMemo(() => meta?.error?.type, [meta?.error?.type])

  if (!meta.value.file) {
    return null
  }

  return (
    <Card key={index}>
      <ContainerButtonClose onPress={handleClose}>
        <FontAwesome name="close" size={24} color="#fff" />
      </ContainerButtonClose>
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '0px',
        }}
      >
        <SelectOptionsDropdown
          mimetype={meta.value.file.type as any}
          values={meta.value.type}
          type={type}
          onChange={onChange(element)}
          message={errType}
          label={'Tipo de Documento'}
        />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
          }}
        >
          <HelperText text={errType} visible />
        </div>
      </div>
      <div
        style={{
          zIndex: 0,
          position: 'relative',
          width: '100%',
          height: '250px',
        }}
      >
        <PreviewElementFile file={meta.value.file} />
      </div>
      <InputField requered topic="Título" name={`${name}.${index}.title`} />
      <ErrorMessage name={element} />
    </Card>
  )
}

export default CardFile

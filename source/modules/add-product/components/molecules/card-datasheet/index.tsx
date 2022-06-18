import React, { useCallback, useMemo } from 'react'

import { IDatasheet, IFormProductValues } from '@/modules/add-product/type'
import { FontAwesome } from '@expo/vector-icons'
import { useFormikContext } from 'formik'

import GetImageButton from '@/components/atom/get-image-button'
import HelperText from '@/components/atom/helper-text'
import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import InputField from '@/components/molecule/input-field'
import InputTextArea from '@/components/molecule/input-text-area'
import SelectOptionsDropdown from '@/components/molecule/select-options-dropdown'

import { Card, ContainerButtonClose } from './styles'

type Props = {
  index: number
  handleClose: (index) => void
  name: keyof IFormProductValues
  typeFunctionPerson?: number
}

const CardDatasheet = ({ index, handleClose, name, typeFunctionPerson = 20 }: Props) => {
  const { values, setFieldValue, errors } = useFormikContext<IFormProductValues>()

  const element: IDatasheet = useMemo(() => values[name][index], [values, name, index])
  const errElement: Record<keyof IDatasheet, string> = useMemo(
    () => errors[name]?.[index],
    [errors, name, index]
  )

  const createStringAtribute = useCallback(
    (attribute: keyof IDatasheet) => `${name}.${index}.${attribute}`,
    [name, index]
  )

  const onChange = (key: string) => (value: any) => setFieldValue(key, value)

  return (
    <Card key={index}>
      <div
        style={{
          display: 'flex',
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GetImageButton
          value={element.imgProfile}
          onChangeValue={onChange(createStringAtribute('imgProfile'))}
          placeholder="Foto"
        />
      </div>
      <div
        style={{
          display: 'flex',
          flex: 3,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px 10px',
          height: 'fit-content',
          width: '100%',
        }}
      >
        <ContainerButtonClose onPress={handleClose}>
          <FontAwesome name="close" size={24} color="#fff" />
        </ContainerButtonClose>
        <div
          style={{
            paddingTop: '10px',
            position: 'relative',
          }}
        >
          <SelectOptionsDropdown
            values={element.function}
            type={typeFunctionPerson}
            onChange={onChange(createStringAtribute('function'))}
            label={'Função'}
          />
          <div
            style={{
              position: 'absolute',
              width: '200px',
              bottom: '0px',
            }}
          >
            <HelperText text={errElement?.function} visible />
          </div>
        </div>
        <InputField requered topic="Nome" name={createStringAtribute('name')} />
        <FieldCPFandCNPJGeneric
          styleTopic={{
            width: 10,
            backgroundColor: '#fff',
          }}
          viewContainer={{
            flexDirection: 'column',
            width: '100%',
          }}
          viewInput={{
            marginTop: 10,
          }}
          onChangeValue={onChange(createStringAtribute('cpf_cnpj'))}
          value={element.cpf_cnpj}
          topic="CPF/CNPJ"
        />
        <InputTextArea
          maxWidthTitle={50}
          height={200}
          maxLength={50000}
          numberLines={10}
          topic="Biografia"
          onChangeValue={onChange(createStringAtribute('about'))}
          value={element.about}
          styleViewContainer={{
            width: '100%',
            flexDirection: 'column',
          }}
        />
      </div>
    </Card>
  )
}

export default CardDatasheet

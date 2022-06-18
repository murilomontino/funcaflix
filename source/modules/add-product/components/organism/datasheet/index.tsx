import React from 'react'
import { TouchableOpacity } from 'react-native'

import { IDatasheet, IFormProductValues } from '@/modules/add-product/type'
import { FontAwesome } from '@expo/vector-icons'
import { FieldArray, useFormikContext } from 'formik'

import CardDatasheet from '../../molecules/card-datasheet'
import { Container } from './styles'

const Datasheet = () => {
  const { values } = useFormikContext<IFormProductValues>()
  return (
    <Container>
      <FieldArray name="datasheet">
        {(arrayHelpers) => {
          const datasheets = values.datasheet

          const handleAddDatasheet = () => {
            arrayHelpers.push({
              about: '',
              function: 0,
              name: '',
              cpf_cnpj: '',
              responsible: false,
            } as IDatasheet)
          }

          return (
            <>
              {datasheets.map((datasheet, index) => (
                <CardDatasheet
                  key={index}
                  index={index}
                  name="datasheet"
                  handleClose={arrayHelpers.handleRemove(index)}
                />
              ))}
              <div
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity onPress={handleAddDatasheet}>
                  <div
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderBottom: '1px solid #ccc',
                    }}
                  />
                  <div
                    style={{
                      alignSelf: 'center',
                      marginTop: '0.5rem',
                    }}
                  >
                    <FontAwesome name="plus-circle" size={48} color="#fff" />
                  </div>
                </TouchableOpacity>
              </div>
            </>
          )
        }}
      </FieldArray>
    </Container>
  )
}

export default Datasheet

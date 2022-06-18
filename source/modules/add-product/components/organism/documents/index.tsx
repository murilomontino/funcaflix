import React from 'react'

import { IDocumentsProducts, IFormProductValues } from '@/modules/add-product/type'
import { FieldArray, useFormikContext } from 'formik'

import CardFile from '../../molecules/card-file'
import GetFileButton from '../../molecules/get-file-button'
import { Container } from '../artist/styles'
import { ContainerCards } from './style'

const Documents = () => {
  const { values, setFieldValue, errors } = useFormikContext<IFormProductValues>()

  const onChange = (key: string) => (value: any) => setFieldValue(key, value)

  return (
    <Container>
      <FieldArray name="documents">
        {(arrayHelpers) => {
          const documents = values.documents

          const handleAddDocument = (files: FileList) => {
            Array.from(files).forEach((file) => {
              arrayHelpers.push({
                file,
                description: '',
                title: null,
                type: 0,
              } as IDocumentsProducts)
            })
          }

          return (
            <>
              <GetFileButton
                onChangeValue={handleAddDocument}
                type={[
                  'image/jpeg',
                  'image/jpg',
                  'image/png',
                  'audio/*',
                  'video/*',
                  'application/pdf',
                ]}
                message="Selecione os documentos"
              />
              <ContainerCards>
                {documents.map((document, index) => (
                  <CardFile
                    name="documents"
                    key={index}
                    index={index}
                    handleClose={arrayHelpers.handleRemove(index)}
                  />
                ))}
              </ContainerCards>
            </>
          )
        }}
      </FieldArray>
    </Container>
  )
}

export default Documents

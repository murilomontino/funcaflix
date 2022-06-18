import React from 'react'

import { useFormik, FormikProvider } from 'formik'
import * as yup from 'yup'

import Details from './components/organism/details'
import Left from './components/organism/left'
import Right from './components/organism/right'
import { Container, ContainerDetails, ContainerRight, ContainerLeft } from './styles'
import { IFormValues } from './type'

import { useSubmitBook } from '@/hooks/use-submit-book'

const Main = () => {
  const { submit } = useSubmitBook()

  const initialValues: IFormValues = {
    culturalName: '',
    cpfOrCnpj: '',
    publishedDate: '',
    financialResource: 0,
    biography: '',
    publisher: '',
    dimensions: '',
    illustrator: '',
    numberOfPages: '',
    genres: [],
    tags: [],
    pdf: null,
    thumbnail: null,
    isbn: '',
    title: '',
    subTitle: '',
    synopsis: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      submit(values).then(({ statusCode }) => {
        if (statusCode === 200) {
          resetForm()
        }
      })
    },
    validationSchema: yup.object().shape({
      cpfOrCnpj: yup.string().required('Campo obrigatório'),
      culturalName: yup.string().trim().required('Nome Cultural é um campo obrigatório'),
      publishedDate: yup.string().trim(),
      financialResource: yup.number().required('Campo obrigatório'),
      isbn: yup.string().trim().required('ISBN é campo obrigatório'),
      title: yup.string().trim().required('Título é um campo obrigatório'),
      subTitle: yup.string().trim(),
      synopsis: yup.string().trim().required('Sinopse é um campo obrigatório'),
      biography: yup.string().trim(),
      pdf: yup.mixed().nullable(),
      thumbnail: yup.mixed().nullable(),
      genres: yup.array().nullable(),
      tags: yup.array().nullable(),
      publisher: yup.string().trim(),
      dimensions: yup.string().trim(),
      illustrator: yup.string().trim(),
      numberOfPages: yup.string().trim(),
    }),
  })

  return (
    <FormikProvider value={formik}>
      <Container>
        <ContainerLeft>
          <Left />
        </ContainerLeft>
        <ContainerDetails>
          <Details />
        </ContainerDetails>
        <ContainerRight>
          <Right />
        </ContainerRight>
      </Container>
    </FormikProvider>
  )
}

export default Main

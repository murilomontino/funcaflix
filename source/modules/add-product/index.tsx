import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import { cnpj, cpf } from 'cpf-cnpj-validator'
import { FormikProvider, useFormik } from 'formik'
import * as yup from 'yup'

import Button from '@/components/atom/button'

import Advertising from './components/organism/advertising'
import Artist from './components/organism/artist'
import Datasheet from './components/organism/datasheet'
import Documents from './components/organism/documents'
import InfoProduct from './components/organism/info-product'
import Product from './components/organism/product'
import Send from './components/organism/send'
import { Container, ContainerButton } from './styles'
import { IFormProductValues } from './type'

import { useSize } from '@/hooks/utils/use-size'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

const initialValues: IFormProductValues = {
  about: '',
  biography: '',
  culturalName: '',
  function: 0,
  imgProfile: null,
  responsible: true,
  category: 0,
  cpf_cnpj: '',
  datasheet: [],
  documents: [],
  products: [],
  advertising: [],
  financialResource: 0,
  genres: [],
  publishedDate: '',
  startDate: '',
  endDate: '',
  subCategory: 0,
  tags: [],
  thumbnail: null,
}

const schema = yup.object().shape({
  about: yup.string().required('O campo descrição é obrigatório'),
  biography: yup.string(),
  culturalName: yup.string().required('O campo nome cultural é obrigatório'),
  function: yup.number().positive('O campo função é obrigatório').required(),
  imgProfile: yup.mixed(),
  responsible: yup.boolean().default(true),
  category: yup.number().positive('O campo categoria é obrigatório').required(),
  subCategory: yup.number().positive('O campo subcategoria é obrigatório').required(),
  cpf_cnpj: yup
    .string()
    .test('CPF/CNPJ Inválido', (value) => {
      return cpf.isValid(value) || cnpj.isValid(value)
    })
    .required('O campo CPF/CNPJ é obrigatório'),
  datasheet: yup
    .array()
    .of(
      yup.object().shape({
        function: yup.number().positive('O campo função é obrigatório').required(),
        about: yup.string().trim(),
        imgProfile: yup.mixed().nullable(),
        cpf_cnpj: yup
          .string()
          .test('CPF/CNPJ Inválido', (value) => {
            return cpf.isValid(value) || cnpj.isValid(value)
          })
          .notRequired(),
        name: yup.string().trim().required('O campo nome é obrigatório'),
        responsible: yup.boolean().default(false),
      })
    )
    .nullable(),
  documents: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().nullable().trim().required('O campo título é obrigatório'),
        type: yup.number().positive('Tipo é um campo obrigatório').required(),
        file: yup.mixed().required('O campo arquivo é obrigatório'),
      })
    )
    .nullable(),
  advertising: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().nullable().trim().required('O campo título é obrigatório'),
        type: yup
          .number()
          .positive('Tipo é um campo obrigatório')
          .required('Tipo é um campo obrigatório'),
        file: yup.mixed().required('O campo arquivo é obrigatório'),
      })
    )
    .nullable(),
  products: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().nullable().trim().required('O campo título é obrigatório'),
        type: yup
          .number()
          .positive('Tipo é um campo obrigatório')
          .required('Tipo é um campo obrigatório'),
        file: yup.mixed().required('O campo arquivo é obrigatório'),
      })
    )
    .nullable(),
  publishedDate: yup.string().when('category', {
    is: (category) => category != 4 || category != 5,
    then: yup.string().required('O campo data de publicação é obrigatório'),
  }),
  startDate: yup.string().when('category', {
    is: (category) => category == 4 || category == 5,
    then: yup.string().required('O campo data de inicio é obrigatório'),
  }),
  endDate: yup.string(),
  financialResource: yup.number().positive('O campo recursos financeiros é obrigatório').required(),
  genres: yup.array().of(yup.string()),
  tags: yup.array().of(yup.string()),
  thumbnail: yup
    .mixed()
    .test('file', 'Formato de arquivo inválido', (value) => {
      if (!value) return true
      return SUPPORTED_FORMATS.includes(value.type)
    })
    .nullable(),
})

const Main = () => {
  const { size } = useSize()

  const [selected, setSelected] = useState(0)

  const [loading, setLoading] = useState(true)

  const ref = useRef<FlatList>(null)

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const scrollToIndex = (index: number) => {
    ref.current.scrollToOffset({
      offset: size.width * index,
      animated: true,
    })
    setSelected(index)
  }

  const data = [
    <InfoProduct key={1} />,
    <Artist key={2} />,
    <Datasheet key={3} />,
    <Advertising key={4} />,
    <Documents key={5} />,
    <Product key={6} />,
    <Send key={7} />,
  ]

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false)
    }
  }, [data])

  const BottomsMap = [
    {
      label: 'Info Produto',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Responsável',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Ficha Tecnica',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Divulgação',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Documentos Relacionados',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Produto',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Enviar Produto',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
  ]

  return (
    <FormikProvider value={formik}>
      <Container>
        <ContainerButton>
          {BottomsMap.map((item, index) => (
            <Button
              key={index}
              style={{
                width: 150,
              }}
              text={item.label}
              onPress={() => item.onPress(index)}
              selectable
              selected={selected === index}
            />
          ))}
        </ContainerButton>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            ref={ref}
            initialScrollIndex={selected}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            onScroll={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / size.width)
              setSelected(index)
            }}
            horizontal
            scrollEnabled={false}
            disableScrollViewPanResponder
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
            renderItem={({ item }) => (
              <div
                style={{
                  flex: 1,
                  position: 'relative',
                  zIndex: 999,
                  padding: 12,
                  width: size.width,
                }}
              >
                {item}
              </div>
            )}
          />
        )}
      </Container>
    </FormikProvider>
  )
}

export default Main

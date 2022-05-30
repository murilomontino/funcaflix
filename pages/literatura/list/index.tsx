import React, { useState } from 'react'

import { GetterBooks } from 'types-funcap'

import Table from '@/components/organism/table'
import TemplateAdminProduct from '@/components/templates/admin'

import api from '@/services'
import { Getter } from '@/services/config/types'

type Props = {
  books: GetterBooks[]
}

const columns = [
  {
    name: '#',
    selector: (row: GetterBooks) => row.index,
    sortable: true,
  },
  {
    name: 'Titulo',
    selector: (row: GetterBooks) => row.titulo,
    sortable: true,
  },
  {
    name: 'Autor',
    selector: (row: GetterBooks) => row.autor,
    sortable: true,
  },
]

const LiteraturaList = ({ books }: Props) => {
  const [data, setData] = useState(books.map((book, index) => ({ ...book, index: index + 1 })))

  return (
    <TemplateAdminProduct>
      <Table columns={columns} data={data} title={'Livros Cadastrados'} />
    </TemplateAdminProduct>
  )
}

export default LiteraturaList

export const getStaticProps = async (ctx) => {
  const config = {
    props: {
      books: [],
    },
  }

  try {
    const { data } = await api.get<Getter<GetterBooks[]>>('books', {
      params: {
        titulo: true,
        autor: true,
      },
    })
    if (data.statusCode === 200) {
      return {
        props: {
          books: data.data,
        },
      }
    }
    return config
  } catch (error) {
    return config
  }
}

import React, { useLayoutEffect, useState } from 'react'
import { TableColumn } from 'react-data-table-component'

import { GetterBooks } from 'types-funcap'

import Table from '@/components/organism/table'
import TemplateAdmin from '@/components/templates/admin'

import api from '@/services'

const LiteraturaList = () => {
  const [data, setData] = useState([])

  const fetchBooks = async () => {
    try {
      const { data } = await api.get('products/2')
      if (data.statusCode === 200) {
        setData(
          data.data.map((book, index) => ({
            titulo: book.title,
            autor: book.cpf_cnpj,
            index: index + 1,
          }))
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  useLayoutEffect(() => {
    fetchBooks()
  }, [])

  const columns: TableColumn<GetterBooks>[] = [
    {
      name: '#',
      selector: (row: GetterBooks) => row.index,
      maxWidth: '25px',
      style: {
        textAlign: 'right',
      },
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

  if (!data.length) {
    return null
  }

  return (
    <TemplateAdmin>
      <Table columns={columns} data={data} title={'Livros Cadastrados'} />
    </TemplateAdmin>
  )
}

export default LiteraturaList

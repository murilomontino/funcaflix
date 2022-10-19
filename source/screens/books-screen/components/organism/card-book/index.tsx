import React from 'react'

import CardBasicInformation from '@/components/molecule/card-basic-information'
import BookFooter from '../../molecules/book-footer'
import AboutDescription from '@/components/molecule/card-about-description'

import Card from '@/components/molecule/card'
import { GetterBook } from '@/domain/entities'

type Props = {
  item: GetterBook 
}

const CardBooks = ({ item }: Props) => {

  return (
    <Card item={item as any}>
        <CardBasicInformation title={item.title} subTitle={item.subTitle} author={item.author} />
        <AboutDescription about={item.synopsis} />
        <BookFooter item={item} />
    </Card>
  )
}

export default CardBooks

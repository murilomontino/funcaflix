import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactInfiniteScroll from 'react-infinite-scroll-component'

import CardArtists from '@/components/molecule/card-artists'
import TitleCarousel from '@/components/molecule/title-carousel'

import { For } from '@/utils/tsx-controls'

type Props = {
  items: Array<any>
  title: string
}

const OtherArtists = ({ items, title }: Props) => {
  const [data, setData] = useState(items.slice(0, 50))

  const fetchMoreData = () => {
    setData((state) => [...state, ...items.slice(state.length, state.length + 50)])
  }

  const hasMore = data.length < items.length

  return (
    <section id="iq-favorites" className="w-100">
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden mt-2">
            <div className="iq-main-header d-flex align-items-center justify-content-between">
              <TitleCarousel title={title} md />
            </div>
          </Col>
        </Row>

        <ReactInfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div
            className="overflow-hidden w-90"
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="row d-flex wrap justify-content-center">
              <For items={items}>{(item, index) => <CardArtists key={index} item={item} />}</For>
            </div>
          </div>
        </ReactInfiniteScroll>
      </Container>
    </section>
  )
}

export default OtherArtists

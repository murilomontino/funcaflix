import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactInfiniteScroll from 'react-infinite-scroll-component'

import ImageNext from '@/components/atom/image-next'
import TitleCarousel from '@/components/molecule/title-carousel'

import scss from './styles.module.scss'

import { For } from '@/utils/tsx-controls'

const Episodes = ({ item, handleChange }) => {
  const handleClick = () => {
    handleChange(item.videoId)
  }

  return (
    <Col className={`col-sm-3 mb-4 pointer-event ${scss['btn']}`}>
      <div
        onClick={handleClick}
        className={`epi-box h-auto wp-video ${scss['h-150-px']} ${scss['w-250-px']} `}
      >
        <div className={`epi-img position-relative`}>
          <ImageNext
            image={item.thumbnail}
            imageStatic
            width="250px"
            height="150px"
            className="img-fluid img-zoom"
            alt=""
          />
          <div className="episode-play-info">
            <div className="episode-play">
              <a to="#">
                <i className="ri-play-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="epi-desc p-1 wrapper"
          style={{
            height: '60px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/*   <div className="d-flex align-items-center justify-content-between">
          <span className="text-white">11 Aug 20</span>
          <span className="text-primary">30m</span>
        </div> */}
          <a to="#">
            <h6
              className="text-white mb-0"
              style={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.5',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              {item.title}
            </h6>
          </a>
        </div>
      </div>
    </Col>
  )
}

type Props = {
  items: Array<any>
  title: string
  onChangeEpisode: (id: string) => void
}

const OtherEpisodies = ({ items, title, onChangeEpisode }: Props) => {
  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = useState(items.slice(0, 50))

  const fetchMoreData = () => {
    setData((state) => [...state, ...items.slice(state.length, state.length + 50)])
    setHasMore(data.length < items.length)
  }

  return (
    <section id="iq-favorites" className="w-100">
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden mt-2">
            <div className="iq-main-header d-flex align-items-center justify-content-between">
              <TitleCarousel title={title} animation={false} lg isButton={false} />
            </div>
          </Col>
        </Row>
        <div
          className="block-space justify-content-center align-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80vw',
            }}
          >
            <ReactInfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Isso é tudo, pessoal!</b>
                </p>
              }
            >
              <div
                className="overflow-hidden"
                style={{
                  minWidth: '80vw',
                }}
              >
                <Row>
                  <For items={items}>
                    {(item, index) => (
                      <Episodes key={index} item={item} handleChange={onChangeEpisode} />
                    )}
                  </For>
                </Row>
              </div>
            </ReactInfiniteScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OtherEpisodies

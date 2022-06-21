import React, { useLayoutEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardSwipper from '@/components/molecule/card-swipper'
import TitleCarousel from '@/components/molecule/title-carousel'

type Props = {
  title: string
  itemsPerView?: number
  id: string
  buttonText?: string
  width?: string
  height?: string
  link?: string
  items: {
    [key: string]: any
    title: string
    id: string
    thumbnail: string
  }[]
}

const CarouselSwipper = ({
  title,
  id,
  items,
  width,
  height,
  itemsPerView = 5.5,
  link = '/',
  buttonText = 'Assistir',
}: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination])
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section id={id} className={'overflow-hidden mb-5 position-relative'}>
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between">
              <TitleCarousel title={title} />
            </div>
            <div id="favorites-contens">
              <div id={`prev-${id}`} className="swiper-button swiper-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div id={`next-${id}`} className="swiper-button swiper-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>
              <Swiper
                navigation={{
                  prevEl: `#prev-${id}`,
                  nextEl: `#next-${id}`,
                }}
                breakpoints={{
                  320: { slidesPerView: itemsPerView - 3 },
                  550: { slidesPerView: itemsPerView - 2 },
                  991: { slidesPerView: itemsPerView - 1 },
                  1400: { slidesPerView: itemsPerView },
                }}
                loop={true}
                slidesPerView={4}
                spaceBetween={20}
                as="ul"
                className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
              >
                {items.map((item, index) => (
                  <SwiperSlide as="li" key={index} virtualIndex={index}>
                    <CardSwipper
                      linkDetails={`${link}/${item.id}`}
                      title={item.title}
                      thumbnail={item.thumbnail}
                      width={width}
                      height={height}
                      button={buttonText}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CarouselSwipper

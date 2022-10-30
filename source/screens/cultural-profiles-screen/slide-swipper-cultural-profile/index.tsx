import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import theme from '@/theme'
import SwipperCore, { EffectFade, Navigation, Thumbs, Pagination } from 'swiper'
import { Swiper as Swipper, SwiperSlide as SwipperSlide } from 'swiper/react'

import TitleCarousel from '@/components/molecule/title-carousel'

import { Choose, For, When } from '@/utils/tsx-controls'
import CardArtists from '@/components/molecule/card-artists'
import { ICulturalProfile } from '@/types/setters'
import api from '@/services'

type Props = {
  title: string
  itemsPerView?: number
  id: string
  buttonText?: string
  width?: string
  height?: string
  queryString?: string
  link?: string
  allLink?: string
}

const CarouselSwipper = ({
  title,
  id,
  height,
  allLink,
  itemsPerView = 5.5,
  link = '/',
}: Props) => {
  const [data, setData] = useState<ICulturalProfile[]>(null)

  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const {} = api.get('')
  }

  useEffect(() => {
    SwipperCore.use([EffectFade, Navigation, Thumbs, Pagination])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section id={id} className={'overflow-hidden mb-5 position-relative'}>
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">
            <Choose>
              <When condition={!data || isLoading}>
                <div className="w-100 align-items-center justify-content-center d-flex">
                  <Skeleton
                    width={'90vw'}
                    height={'30px'}
                    baseColor={theme.COLORS.BACKGROUND_TITLE}
                  />
                </div>
              </When>
              <When condition={!!title}>
                <div className="d-flex align-items-center justify-content-between">
                  <TitleCarousel title={title}  isButton={false} />
                </div>
              </When>
            </Choose>

            <div id="favorites-contens">
              <div id={`prev-${id}`} className="swiper-button swiper-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div id={`next-${id}`} className="swiper-button swiper-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>
              <Choose>
                <When condition={!data || isLoading}>
                  <div
                    id="favorite-contens"
                    className="favorites-slider d-flex list-inline row p-0 m-0"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    <For items={[...Array(itemsPerView + 0.5)]}>
                      {(item, index) => (
                        <div className="block-images position-relative m-1" key={index}>
                          <Skeleton
                            height={height}
                            width={280}
                            baseColor={theme.COLORS.BOX_SKELETON}
                            borderRadius={2}
                          />
                        </div>
                      )}
                    </For>
                  </div>
                </When>
                <When condition={!!data}>
                  <Swipper
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
                    loop={data.length > itemsPerView}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {data.map((item, index) => {
                    
                      return (
                        <SwipperSlide as="li" key={index} virtualIndex={index}>
                          <CardArtists key={index} item={item} />
                        </SwipperSlide>
                      )
                    })}
                  </Swipper>
                </When>
              </Choose>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CarouselSwipper

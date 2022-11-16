import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import theme from '@/theme'
import SwipperCore, { EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper as Swipper, SwiperSlide as SwipperSlide } from 'swiper/react'

import TitleCarousel from '@/components/molecule/title-carousel'

import { ICulturalProfile } from '@/types/setters'
import { Choose, For, When } from '@/utils/tsx-controls'

import CardArtists from '@/components/molecule/card-artists'
import removeAccentsAndJoin from '@/helpers/strings-normalize'

type CarouselSwipperProfilesProps = {
  title: string
  itemsPerView?: number
  id: string
  height?: string
  profiles: ICulturalProfile[]
}

const CarouselSwipperProfiles = ({
  title,
  id,
  height = '240px',
  itemsPerView = 5.5,
  profiles,
}: CarouselSwipperProfilesProps) => {
  const [isLoading, setIsLoading] = React.useState(true)

  const normalize = removeAccentsAndJoin(title)

  useEffect(() => {
    SwipperCore.use([EffectFade, Navigation, Thumbs, Pagination])
    setIsLoading(false)
  }, [])

  return (
    <section id={id} className={'overflow-hidden mb-5 position-relative'}>
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">
            <Choose>
              <When condition={profiles.length === 0 || isLoading}>
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
                  <TitleCarousel title={title} link={`
                    /perfis-culturais/${normalize}
                  `} />
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
                <When condition={profiles.length === 0 || isLoading}>
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
                            circle
                          />
                        </div>
                      )}
                    </For>
                  </div>
                </When>
                <When condition={profiles.length > 0}>
                  <Swipper
                    navigation={{
                      prevEl: `#prev-${id}`,
                      nextEl: `#next-${id}`,
                    }}
                    breakpoints={{
                      320: { slidesPerView: 1.5 },
                      550: { slidesPerView: 3.5 },
                      991: { slidesPerView: 4.5 },
                      1400: { slidesPerView: 5.5 },
                    }}
                    loop={profiles.length > itemsPerView}
                    slidesPerView={4.5}
                    spaceBetween={0}
                    as="ul"
                    className="favorites-slider list-inline row p-0 m-0"
                  >
                    {profiles.map((item, index) => {
                      return (
                        <SwipperSlide as="li" key={index} virtualIndex={index}>
                          <CardArtists item={item} />
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

export default CarouselSwipperProfiles
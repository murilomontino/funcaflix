import React, { Suspense, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import { usernameGenerate } from '@/helpers/strings-normalize'
import theme from '@/theme'
import { ICulturalProfile } from '@/types/setters'
import SwipperCore, { EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper as Swipper, SwiperSlide as SwipperSlide } from 'swiper/react'



type CarouselSwipperProfilesProps = {
  title: string
  itemsPerView?: number
  id: string
  height?: string
  fetchData: (arg: string) => Promise<ICulturalProfile[]>
}

const CardArtistsLazy = React.lazy(() => import('@/components/molecule/card-artists'))
const TitleCarouselLazy = React.lazy(() => import('@/components/molecule/title-carousel'))



const CarouselSwipperProfiles = ({
  title,
  id,
  height = '240px',
  itemsPerView = 5.5,
  fetchData
}: CarouselSwipperProfilesProps) => {
  const [data, setData] = React.useState<ICulturalProfile[]>([])
  const [fetching, setFetching] = React.useState<boolean>(false)
  const normalize = usernameGenerate(title)

  useEffect(() => {
    SwipperCore.use([EffectFade, Navigation, Thumbs, Pagination])

    fetchData(normalize as string).then((data) => {
      setData(data)
      setFetching(true)
    })
  }, [])

  if (data.length === 0 && fetching) return null

  return (
    <section id={id} className={'overflow-hidden mb-5 position-relative'}>
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">

            <Suspense fallback={(
              <div className="w-100 align-items-center justify-content-center d-flex">
                <Skeleton
                  width={'90vw'}
                  height={'30px'}
                  baseColor={theme.COLORS.BACKGROUND_TITLE}
                />
              </div>
            )}>
              <div className="d-flex align-items-center justify-content-between">
                <TitleCarouselLazy title={title} link={`
                    /perfis-culturais/${normalize}
                  `} />
              </div>
            </Suspense >


            <div id="favorites-contens">
              <div id={`prev-${id}`} className="swiper-button swiper-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div id={`next-${id}`} className="swiper-button swiper-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>

              <Swipper
                navigation={{
                  prevEl: `#prev-${id}`,
                  nextEl: `#next-${id}`,
                }}
                breakpoints={{
                  320: { slidesPerView: 0.5 },
                  550: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2.5 },
                  991: { slidesPerView: 3.5 },
                  1200: { slidesPerView: 4.5 },
                  1400: { slidesPerView: 5.5 },
                }}
                loop={data.length > itemsPerView}
                slidesPerView={4.5}
                spaceBetween={0}
                as="ul"
                className="favorites-slider list-inline row p-0 m-0"
              >
                {data.map((item, index) => {
                  return (
                    <SwipperSlide as="li" key={index} virtualIndex={index}>
                      <Suspense fallback={(
                        <div className="block-images position-relative m-1" key={index}>
                          <Skeleton
                            height={height}
                            width={280}
                            baseColor={theme.COLORS.BOX_SKELETON}
                            borderRadius={2}
                            circle
                          />
                        </div>
                      )}>
                        <CardArtistsLazy item={item} />
                      </Suspense>
                    </SwipperSlide>
                  )
                })}
              </Swipper>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CarouselSwipperProfiles
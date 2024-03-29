import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import theme from '@/theme'
import { IGetterProduct, IGetterTVPrograms } from '@/types/getters'
import SwipperCore, { EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper as Swipper, SwiperSlide as SwipperSlide } from 'swiper/react'

import CardSwipper from '@/components/molecule/card-swipper'
import TitleCarousel from '@/components/molecule/title-carousel'

import { Choose, For, When } from '@/utils/tsx-controls'

type Props = {
	title: string
	itemsPerView?: number
	id: string
	buttonText?: string
	width?: string
	disabled?: boolean
	existLogo?: boolean
	height?: string
	queryString?: string
	link?: string
	endpoint?: string
	allLink?: string
	items: IGetterProduct[] | IGetterTVPrograms[]
}

const CarouselSwipper = ({
	title,
	id,
	items,
	width,
	height,
	disabled = false,
	queryString,
	allLink,
	existLogo = true,
	itemsPerView = 5.5,
	link = '/',
	buttonText = 'Assistir',
}: Props) => {
	const [isLoading, setIsLoading] = useState(true)

	React.useEffect(() => {
		SwipperCore.use([EffectFade, Navigation, Thumbs, Pagination])

		setIsLoading(false)
	}, [])

	if (items?.length === 0) return null

	return (
		<section id={id} className={'overflow-hidden mb-5 position-relative'}>
			<Container fluid>
				<Row>
					<Col sm="12" className="overflow-hidden">
						<Choose>
							<When condition={!items || isLoading}>
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
									<TitleCarousel
										title={title}
										link={'/' + (allLink || link)}
										animation={!disabled}
									/>
								</div>
							</When>
						</Choose>

						<div id="favorites-contens">
							<div
								id={`prev-${id}`}
								className="swiper-button swiper-button-prev"
							>
								<i className="fa fa-chevron-left"></i>
							</div>
							<div
								id={`next-${id}`}
								className="swiper-button swiper-button-next"
							>
								<i className="fa fa-chevron-right"></i>
							</div>
							<Choose>
								<When condition={!items || isLoading}>
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
												<div
													className="block-images position-relative m-1"
													key={index}
												>
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
								<When condition={!!items}>
									<Swipper
										navigation={{
											prevEl: `#prev-${id}`,
											nextEl: `#next-${id}`,
										}}
										breakpoints={{
											320: {
												slidesPerView: itemsPerView - 3,
												slidesPerGroup: itemsPerView - 3.5,
											},
											550: {
												slidesPerView: itemsPerView - 2,
												slidesPerGroup: itemsPerView - 2.5,
											},

											991: {
												slidesPerView: itemsPerView - 1,
												slidesPerGroup: itemsPerView - 1.5,
											},

											1400: {
												slidesPerView: itemsPerView,
												slidesPerGroup: itemsPerView - 0.5,
											},
										}}
										loop={items.length > itemsPerView}
										slidesPerView={4}
										spaceBetween={20}
										as="ul"
										className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
									>
										{items.map((item, index) => {
											const queryOrBar = queryString ? queryString : '/'
											const id = item.videoId || item.id
											let linkDefinitive = `${link}${queryOrBar}${id}`

											if (item.category === 8) {
												linkDefinitive = `https://mapacultural.acesso.funcap.se.gov.br/`
											}

											return (
												<SwipperSlide as="li" key={index} virtualIndex={index}>
													<CardSwipper
														disabled={disabled}
														linkDetails={linkDefinitive}
														title={item.title}
														existLogo={existLogo}
														thumbnail={item.thumbnail}
														width={width}
														height={height}
														button={buttonText}
													/>
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

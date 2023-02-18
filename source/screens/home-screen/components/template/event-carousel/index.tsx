import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import event from '@/public/images/evento.jpeg'
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from '@/components/atom/image-next'

// episodes
import TitleCarousel from '@/components/molecule/title-carousel'

import EventCard from '../../organisms/event-card'

SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination])

const EventCarousel = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<section id="iq-trending" className="s-margin p-20 align-items-center">
			<Container fluid>
				<Row>
					<Col sm="12" className="overflow-hidden">
						<div className="d-flex align-items-center justify-content-between mb-3">
							<TitleCarousel title="Eventos" />
						</div>
						<div id="trending-contens">
							<div id="prev4" className="swiper-button swiper-button-prev">
								<i className="fa fa-chevron-left"></i>
							</div>
							<div id="next4" className="swiper-button swiper-button-next">
								<i className="fa fa-chevron-right"></i>
							</div>
							<Swiper
								as="ul"
								thumbs={{ swiper: thumbsSwiper }}
								centeredSlides={true}
								centeredSlidesBounds={true}
								navigation={{
									prevEl: '#prev4',
									nextEl: '#next4',
								}}
								slidesPerView={5}
								spaceBetween={20}
								breakpoints={{
									320: { slidesPerView: 1 },
									550: { slidesPerView: 2 },
									991: { slidesPerView: 3 },
									1400: { slidesPerView: 3 },
									1500: { slidesPerView: 3 },
								}}
								loop={true}
								className="list-inline p-0 m-0 row align-items-center iq-rtl-direction"
							>
								{[1, 2, 3].map((item, index) => (
									<SwiperSlide as="li" key={index}>
										<a to="#">
											<div
												className="movie-slick position-relative"
												style={{
													height: '250px',
													width: '100%',
												}}
											>
												<Image
													image={event}
													imageStatic
													layout="fill"
													className="img-fluid"
													alt=""
												/>
											</div>
										</a>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div>
							<Swiper
								onSwiper={setThumbsSwiper}
								slidesPerView={1}
								freeMode={true}
								watchSlidesProgress={true}
								id="trending-slider"
								className="mt-3  list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction"
							>
								<SwiperSlide as="li">
									<EventCard thumbnail={event} />
								</SwiperSlide>
							</Swiper>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default EventCarousel

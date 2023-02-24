import React from 'react'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//img

type Props = {
	items: {
		id: number
		playlistId: string
		title: string
		idProduct: string
		videoId: string
		thumbnail: string
	}[]
}

const TrendingMainSlider = ({ items }: Props) => {
	SwiperCore.use([Navigation])

	return (
		<section id="movieshow" className="iq-main-slider p-0 mb-3">
			<div id="prev" className="swiper-button swiper-button-prev">
				<i className="ri-arrow-left-s-line"></i>
			</div>
			<div id="next" className="swiper-button swiper-button-next">
				<i className="ri-arrow-right-s-line"></i>
			</div>
			<Swiper
				slidesPerView={2}
				spaceBetween={0}
				centeredSlides={true}
				navigation={{
					prevEl: '#prev',
					nextEl: '#next',
				}}
				loop={true}
				className=""
			>
				{items.map((item, index: number) => (
					<SwiperSlide key={item.id}>
						<a href={`/video/${item.idProduct}?videoId=${item.videoId}`}>
							<div className="shows-img">
								<img src={item.thumbnail} className="w-100 img1" alt="" />
								<div className="shows-content">
									<h4 className="text-white mb-1">{item.title}</h4>
									{/*  <div className="movie-time d-flex align-items-center">
                  <div className="badge badge-secondary p-1 mr-2">20+</div>
                  <span className="text-white">2h 15m</span>
                </div> */}
								</div>
							</div>
						</a>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default TrendingMainSlider

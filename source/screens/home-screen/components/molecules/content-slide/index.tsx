import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Logo from '@/public/logo-funcap.png'
import theme from '@/theme'
import Image from 'next/image'
import Link from 'next/link'

import scss from './styles.module.scss'

import { useResources } from '@/hooks/utils/use-resources'

type Props = {
	title: string
	link: string
	description: string
}

const ContentSlide = ({ title, description, link }: Props) => {
	const { isFontReady } = useResources()

	if (!isFontReady) return null

	return (
		<Container fluid className={`position-relative ${scss['container']}`}>
			<div className="slider-inner h-100">
				<Row className="iq-ltr-direction h-100">
					<Col xl="6" lg="12" md="12" className="w-100 h-100">
						<div
							className={`channel-logo ${scss['container-logo']}`}
							data-iq-delay="0.5"
						>
							<Image
								src={Logo}
								className="c-logo"
								alt="Logo Funcap"
								height={30}
								width={30}
							/>
							<h6
								style={{
									fontFamily: theme.FONTS.TITLE_BOLD,
								}}
							>
								Funcap
							</h6>
						</div>
						<div className={`${scss['container-text']}`}>
							<h1
								style={{
									fontFamily: theme.FONTS.TITLE_BOLD,
									marginBottom: '1rem',
								}}
								className="slider-text text-uppercase"
								data-iq-gsap="onStart"
								data-iq-position-x="-200"
							>
								{title}
							</h1>
							<div className="d-flex flex-wrap align-items-center">
								{/*  <div
                className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                data-iq-gsap="onStart"
                data-iq-position-x="-200"
                data-iq-delay="-0.5"
              >
                <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star-half" aria-hidden="true"></i>
                  </li>
                </ul>
                <span className="text-white ml-2">4.7(lmdb)</span>
              </div>
              <div
                className="d-flex align-items-center mt-2 mt-md-3"
                data-iq-gsap="onStart"
                data-iq-position-x="-200"
                data-iq-delay="-0.5"
              >
                <span className="badge badge-secondary p-2">18+</span>
                <span className="ml-3">2 Seasons</span>
              </div> */}

								<p
									data-iq-gsap="onStart"
									data-iq-position-y="80"
									data-iq-delay="0.8"
								>
									{description.trim().length > 0 &&
										description?.slice(0, 650).concat('...\n')}
								</p>
							</div>
							<div
								className="d-flex align-items-center r-mb-23 position-absolute bottom-3"
								data-iq-gsap="onStart"
								data-iq-position-y="80"
								data-iq-delay="0.8"
							>
								<Link href={link}>
									<a className="btn btn-hover iq-button button-hover iq-border-radius-5">
										<i className="fa fa-play mr-2" aria-hidden="true"></i>Play
										Now
									</a>
								</Link>
							</div>
						</div>
						{/*   <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
              <div className="text-primary title starring">
                Starring: <span className="text-body">Karen Gilchrist, James Earl Jones</span>
              </div>
              <div className="text-primary title genres">
                Genres: <span className="text-body">Action</span>
              </div>
              <div className="text-primary title tag">
                Tag: <span className="text-body">Action, Adventure, Horror</span>
              </div>
            </div>
            <div
              className="d-flex align-items-center r-mb-23"
              data-iq-gsap="onStart"
              data-iq-position-y="80"
              data-iq-delay="0.8"
            >
               <a href="/show-details" className="btn btn-hover iq-button">
                <>
                  <i className="fa fa-play mr-2" aria-hidden="true"></i>
                  <p>Assistir</p>
                </>
              </a>
               <a href="/show-details" className="btn btn-link">
                More details
              </a> 
            </div>
            */}
					</Col>
					{/* <a href="/" className={`video-open playbtn ${scss['button-play']}`}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="80px"
              height="80px"
              viewBox="0 0 255 255"
              enableBackground="new 0 0 213.7 213.7"
              xmlSpace="preserve"
            >
              <polygon
                className="triangle"
                fill="none"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="73.5,62.5 148.5,105.8 73.5,149.1 "
              />
              <circle
                className="circle"
                fill="none"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="106.8"
                cy="106.8"
                r="103.3"
              />
            </svg>
            <span className="w-trailor">Assistir</span>
          </a> */}
				</Row>
			</div>
		</Container>
	)
}

export default ContentSlide

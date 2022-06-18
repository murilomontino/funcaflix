import React from 'react'

import Logo from '@/public/logo-funcap.png'
import theme from '@/theme'
import Image from 'next/image'

const EventContent = () => {
  return (
    <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
      <a to="#" tabIndex="0">
        <div className="res-logo">
          <div
            className={`channel-logo d-flex`}
            data-iq-delay="0.5"
            style={{
              alignItems: 'center',
              borderLeft: '5px solid white',
              background:
                'transparent linear-gradient(270deg, rgba(11, 1, 2, 0) 0%, rgba(135, 135, 135, 0.3) 100%)',
            }}
          >
            <Image src={Logo} className="c-logo" alt="Logo Funcap" height={45} width={45} />
            <h6
              style={{
                fontFamily: theme.FONTS.TITLE_BOLD,
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'lowercase',
                fontVariant: 'small-caps',
                marginLeft: '1rem',
              }}
            >
              Funcap
            </h6>
          </div>
        </div>
      </a>
      <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
      <div className="d-flex align-items-center text-white text-detail">
        {/*  <span className="badge badge-secondary p-3">18+</span> */}
        <span className="ml-3">3 Seasons</span>
        <span className="trending-year">2020</span>
      </div>
      {/*  <div className="d-flex align-items-center series mb-4">
        <a to="#">
          <img src={trendinglabel} className="img-fluid" alt="" />
        </a>
        <span className="text-gold ml-3">#2 in Series Today</span>
      </div> */}
      <p
        className="trending-dec text-justify"
        style={{
          textIndent: '2em',
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </p>
      <div className="p-btns">
        <div className="d-flex align-items-center p-0">
          <a to="/show-details" className="btn btn-hover mr-2" tabIndex="0">
            <i className="fa fa-play mr-2" aria-hidden="true"></i>Play Now
          </a>
          <a to="#" className="btn btn-link" tabIndex="0">
            <i className="ri-add-line"></i>My List
          </a>
        </div>
      </div>
      <div className="trending-list mt-4">
        <div className="text-primary title">
          Starring:
          <span className="text-body">Wagner Moura, Boyd Holbrook, Joanna</span>
        </div>
        <div className="text-primary title">
          Genres:
          <span className="text-body">Crime, Action, Thriller, Biography</span>
        </div>
        <div className="text-primary title">
          This Is:
          <span className="text-body">Violent, Forceful</span>
        </div>
      </div>
    </div>
  )
}

export default EventContent

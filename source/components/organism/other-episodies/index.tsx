import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TitleCarousel from '@/components/molecule/title-carousel'

import episode1 from '../../../../styles/assets/images/episodes/01.jpg'
import scss from './styles.module.scss'

const Episodes = () => (
  <div className="col-sm-3 mb-4">
    <div className={`epi-box h-auto wp-video ${scss['h-150-px']} ${scss['w-250-px']} `}>
      <div className="epi-img position-relative">
        <img src={episode1} className="img-fluid img-zoom" alt="" />
        <div className="episode-play-info">
          <div className="episode-play">
            <a to="#">
              <i className="ri-play-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="epi-desc p-3">
        <div className="d-flex align-items-center justify-content-between">
          <span className="text-white">11 Aug 20</span>
          <span className="text-primary">30m</span>
        </div>
        <a to="#">
          <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
        </a>
      </div>
    </div>
  </div>
)

const OtherEpisodies = () => {
  return (
    <section id="iq-favorites">
      <Container fluid>
        <div className="block-space">
          <Row>
            <Col sm="12" className="overflow-hidden ">
              <div className="iq-main-header d-flex align-items-center justify-content-between">
                <TitleCarousel title="Outros Episódios" />
              </div>
            </Col>
          </Row>
          <div
            className="w-100 bg-white"
            style={{
              display: 'flex',

              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <Row
                className="px-6 bg-warning w-80"
                style={{
                  alignSelf: 'center',
                }}
              >
                <Episodes />
                <Episodes />
                <Episodes />
                <Episodes />
                <Episodes />
                <Episodes />
                <Episodes />

                <Episodes />
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OtherEpisodies

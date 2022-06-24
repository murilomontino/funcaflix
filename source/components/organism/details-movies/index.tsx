import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DetailsMovies = ({ item, playlist }) => {
  const description =
    item.description && item.description !== 'Não Informado' ? item.description : playlist.about

  return (
    <section className="movie-detail container-fluid px-5">
      <Row>
        <Col lg="12">
          <div className="trending-info g-border">
            <h1 className="trending-text text-uppercase mt-0">{item.title || playlist.title}</h1>
            {/* 
            <ul className="p-0 list-inline d-flex align-items-center movie-content">
              <li className="text-white">Action</li>
              <li className="text-white">Drama</li>
              <li className="text-white">Thriller</li>
            </ul>
            <div className="d-flex align-items-center text-white text-detail">
              <span className="badge badge-secondary p-3">13+</span>
              <span className="ml-3">3h 15m</span>
              <span className="trending-year">2020</span>
            </div>
            <div className="d-flex align-items-center series mb-4">
              <span className="text-gold ml-3">#2 in Series Today</span>
            </div> 
            */}
            <p
              className="trending-dec w-100 mb-0 text-justify"
              style={{
                textIndent: '2em',
              }}
            >
              {description}
            </p>
            {/* <ul className="list-inline p-0 mt-4 share-icons music-play-lists">
              <li>
                <span>
                  <i className="ri-add-line"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="ri-heart-fill"></i>
                </span>
              </li>
              <li className="share">
                <span>
                  <i className="ri-share-fill"></i>
                </span>
                <div className="share-box">
                  <div className="d-flex align-items-center">
                    <a to="#" className="share-ico">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a to="#" className="share-ico">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a to="#" className="share-ico">
                      <i className="ri-links-fill"></i>
                    </a>
                  </div>
                </div>
              </li>
            </ul> */}
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default DetailsMovies

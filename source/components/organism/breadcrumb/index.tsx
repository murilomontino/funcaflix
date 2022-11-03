import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import theme from '@/theme'
import { If } from '@/utils/tsx-controls'

type Props = {
  title: string
  image?: any
  children?: JSX.Element | JSX.Element[]
}

const BreadCrumb = ({ title, image, children }: Props) => {
  return (
    <div
      className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50"
      style={{ backgroundImage: `url(${image})`, width: '100%', zIndex: 0 }}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col sm="12">
            <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
              <h2
                style={{
                  fontFamily: theme.FONTS.TITLE_BOLD,
                  color: theme.COLORS.TEXT,
                  textTransform: 'lowercase',
                  fontVariant: 'small-caps',
                  letterSpacing: 3,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}
              >
                {title}
              </h2>
            </nav>
          </Col>
        </Row>
      </Container>

      <If condition={!!children}>
        <div
          className='position-absolute w-100 h-100 top-0'
          style={{
            zIndex: 99
          }}>
          <div className='d-flex w-100 h-100 position-relative'>
            {children}
          </div>
        </div>
      </If>

    </div>
  )
}

export default BreadCrumb

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import theme from '@/theme'

type Props = {
  title: string
  image?: any
}

const BreadCrumb = ({ title, image }: Props) => {
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
    </div>
  )
}

export default BreadCrumb

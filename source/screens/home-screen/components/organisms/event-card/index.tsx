import React from 'react'
import { Nav, Tab } from 'react-bootstrap'

import EventContent from '../../molecules/event-content'

type Props = {
  thumbnail: any
}

function EventCard({ thumbnail }: Props) {
  return (
    <div
      className="tranding-block position-relative"
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <Tab.Container defaultActiveKey="trending-data1" className="trending-custom-tab">
        <div className="tab-title-info position-relative iq-ltr-direction">
          <Nav
            as="ul"
            variant="pills"
            className="trending-pills nav-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
          >
            <Nav.Item as="li" className="nav-item">
              <Nav.Link href="" eventKey="trending-data1">
                Informações
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content className="trending-content">
          <Tab.Pane eventKey="trending-data1" className="overlay-tab show fade">
            <EventContent />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}

export default EventCard

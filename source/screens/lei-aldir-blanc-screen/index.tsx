import { GetterProjects } from '@/domain/entities'
import React, { useState } from 'react'

import NavigationProfile from '@/components/molecule/navigation-profile'
import { IGetterProduct } from '@/types/getters'
import HeaderLeiAldirBlanc from './header-lei-aldir-blanc'

import TabPaneEvents from '@/components/tab-contents/tab-pane-events'
import TabPaneHome from '@/components/tab-contents/tab-pane-home'
import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'

type Props = {
  books: IGetterProduct[]
  opportunities: GetterProjects[]
  events: IGetterProduct[]
  participation?: IGetterProduct[]
  workshops: IGetterProduct[]
  tvProgramsPlaylist: IGetterProduct[]
}

function LeiAldirBlankPage({ books, opportunities, events, tvProgramsPlaylist, workshops }: Props) {
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <HeaderLeiAldirBlanc />

      <div className="page-content">

        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className='p-2'>
                <div className="d-flex w-100 justify-content-center">
                  <NavigationProfile
                    activeTab={activeTab}
                    onChangeActiveTab={toggleTab}
                    optionsTab={[
                      'Página Principal',
                      'Eventos',
                    ]}
                  />
                </div>

                <TabContent activeTab={activeTab} className="pt-4 text-muted">
                  <TabPane tabId="1">
                    <TabPaneHome
                      books={books}
                      opportunities={opportunities}
                      events={events}
                      tvProgramsPlaylist={tvProgramsPlaylist}
                      workshops={workshops}
                    />
                  </TabPane>
                  <TabPane tabId="2">
                    <TabPaneEvents events={events} />
                  </TabPane>
                </TabContent>

              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default LeiAldirBlankPage

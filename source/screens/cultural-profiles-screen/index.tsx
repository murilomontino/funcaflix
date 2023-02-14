import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import image from '@/public/images/banner-perfis-culturais-2.jpg'

import BreadCrumb from '@/components/organism/breadcrumb'

import constants from '@/global/constants'
import { useResources } from '@/hooks/utils/use-resources'

import NavigationProfile from '@/components/molecule/navigation-profile'

import Loading from '@/components/atom/loading'
import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane
} from 'reactstrap'

import TabPaneItemsProfile from './tab-pane/tab-pane-items-profiles'
import TabPaneSearchProfiles from './tab-pane/tab-pane-search'

type Props = {
  segments: string[]
  cities: string[]
}

const CulturalProfilesScreen = ({ segments, cities }: Props) => {

  const { isFontReady } = useResources()
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  if (!isFontReady) return <Loading />

  return (
    <React.Fragment>
      <BreadCrumb title="Perfis Culturais" image={image} />

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
                      'Segmentos',
                      'Cidades',
                      'Busca',
                    ]}
                  />
                </div>

                <TabContent activeTab={activeTab} className="pt-4 text-muted">
                  <TabPane tabId="1">
                    <TabPaneItemsProfile items={segments} active={activeTab === "1"} route='segment' />
                  </TabPane>
                </TabContent>

                <TabContent activeTab={activeTab} className="pt-4 text-muted">
                  <TabPane tabId="2">
                    <TabPaneItemsProfile items={cities} active={activeTab === "2"} route='city' />
                  </TabPane>
                </TabContent>

                <TabContent activeTab={activeTab} className="pt-4 text-muted">
                  <TabPane tabId="3">
                    <TabPaneSearchProfiles active={activeTab === "3"} />
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

export default CulturalProfilesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

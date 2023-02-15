import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'

import { IGetterCulturalProfile } from '@/types/getters'
import { QRCodeSVG } from 'qrcode.react'

import CardProfile from '@/components/molecule/card-profile'
import DownloadQRCode from '@/components/molecule/download-qrcode'
import NavigationProfile from '@/components/molecule/navigation-profile'
import ButtonGroupSocialMedia from '@/components/molecule/social-media/button-group-social-media'
import BreadCrumb from '@/components/organism/breadcrumb'
import TabPaneEvents from '@/components/tab-contents/tab-pane-events'
import TabPaneOverview from '@/components/tab-contents/tab-pane-overview'

import useSocialMediaValid from '@/hooks/use-social-media-valid'



type ProfileScreenProps = {
  profile: IGetterCulturalProfile
  username: string
}

const ProfileScreen = ({ profile, username }: ProfileScreenProps) => {


  const {
    about,
    acting,
    banner,
    city,
    email,
    facebook,
    hashtags,
    instagram,
    name,
    phone,
    segment,
    thumbnail,
    twitter,
    uf,
    youtube
  } = profile

  const bannerURL = `${process.env._currentURL}/images/banner/${banner}`

  const [activeTab, setActiveTab] = useState('1');

  const {
    facebookValid,
    instagramValid,
    twitterValid,
    youtubeValid
  } = useSocialMediaValid({ facebook, instagram, twitter, youtube })

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <BreadCrumb title={name} image={bannerURL} >
        <div
          className='h-100'
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CardProfile
            name={name}
            avatar={thumbnail}
            segment={segment}
            city={city}
            acting={acting}
          />
        </div>
        <div className="position-absolute bottom-0 right-0 m-1">
          <ReactTooltip />
          <QRCodeSVG
            data-tip="QRCode do seu Perfil. Baixe e Compartilhe em suas Redes Sociais"
            value={`${process.env.URL}/${username}`}
            size={128}
            style={{
              zIndex: 9999
            }} />

          <DownloadQRCode username={username} />

        </div>
      </BreadCrumb>
      <React.Fragment>
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
                        'Sobre',
                        'Eventos',
                      ]}
                    />
                  </div>
                  <div className='d-flex w-100 justify-content-center align-items-center'>
                    <ButtonGroupSocialMedia
                      facebook={facebook}
                      instagram={instagram}
                      twitter={twitter}
                      youtube={youtube}
                      fValid={facebookValid}
                      iValid={instagramValid}
                      tValid={twitterValid}
                      yValid={youtubeValid}
                      iconProps={{
                        className: 'btn btn-primary btn-sm mx-1',
                        style: {
                          marginTop: 24,
                        }
                      }}
                    />
                  </div>
                  <TabContent activeTab={activeTab} className="pt-4 text-muted">
                    <TabPane tabId="1">
                      <TabPaneOverview
                        about={about}
                        email={email}
                        name={name}
                        phone={phone}
                        city={city}
                        uf={uf}
                        segment={segment}
                        acting={acting}
                        hashtags={hashtags}
                      />
                    </TabPane>
                    <TabPane tabId="2">
                      <TabPaneEvents events={[]} />
                    </TabPane>
                  </TabContent>

                </div>
              </Col>
            </Row>

          </Container>
        </div>
      </React.Fragment>
    </div>
  )
}

export default ProfileScreen
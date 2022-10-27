import React from 'react'

import {
    Col,
    Row,
} from 'reactstrap'


type Props = {
    name: string
    avatar: string
    segment: string
    city: string
    acting: string
}

const CardProfile = ({ name, acting, segment, avatar, city }: Props) => {
    const avatarURL = `${process.env._currentURL}/images/profile/${avatar}`
    
    return (
        <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
            <Row className="g-4 p-4">
                <div className="col-auto">
                    <div className="avatar-130" style={{
                        height: '200px',	
                        width: '200px',
                    }}>
                        <img src={avatarURL} alt="user-img"
                            className="img-thumbnail rounded-circle" />
                    </div>
                </div>

                <Col>
                    <div className="p-2">
                        <h3 className="text-white mb-1">{name}</h3>
                        <p className="text-white-75">{acting}</p>
                        <div className="hstack text-white-50 gap-1">
                            <div className="me-2"><i
                                className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>{city}
                            </div>
                            <div className="me-2">
                                {segment}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CardProfile
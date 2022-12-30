import React from 'react'

import BreadCrumb from '@/components/organism/breadcrumb'

import LogoLeiAldirBlank from '@/public/images/lei-aldir-blanc-logo.png'
import ThumbnailLeiAldirBlank from '@/public/images/lei-aldir-blanc.jpg'

import CardProfile from '@/components/molecule/card-profile'
import DownloadQRCode from '@/components/molecule/download-qrcode'
import { QRCodeSVG } from 'qrcode.react'
import ReactTooltip from 'react-tooltip'

const HeaderLeiAldirBlank = () => {
    const name = 'Lei Aldir Blank'

    return (
        <BreadCrumb title={name} image={ThumbnailLeiAldirBlank} >
            <div className='h-100 d-flex align-items-center'>
                <CardProfile
                    staticAvatar
                    name={name}
                    avatar={LogoLeiAldirBlank}
                    segment={null}
                    city={'Aracaju'}
                    acting={null}
                />
            </div>
            <div className="position-absolute bottom-0 right-0 p-2">
                <ReactTooltip />
                <QRCodeSVG
                    data-tip="QRCode do seu Perfil. Baixe e Compartilhe em suas Redes Sociais"
                    value={`${process.env.URL}/lei-aldir-blank`}
                    size={128}
                    style={{
                        zIndex: 9999
                    }} />

                <DownloadQRCode username='lei-aldir-blank' />

            </div>
        </BreadCrumb>
    )
}

export default React.memo(HeaderLeiAldirBlank)
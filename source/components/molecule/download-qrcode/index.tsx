import { If } from '@/utils/tsx-controls'
import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'

type DownloadQRCodeProps = {
    username: string
}

const DownloadQRCode = ({ username }: DownloadQRCodeProps) => {

    const [download] = useState(`${process.env._currentURL}images/qrcode/${username}`)

    return (
        <>
            <ReactTooltip />
            <p data-tip="Baixe seu QRCode" className='btn-default text-white font-weight-bold'>
                <a
                    className="btn btn-toolbar p-0 text-center w-100 justify-content-center"
                    href={download}
                    download={`qrcode-${username}.png`}
                >
                    Download
                </a>
            </p>

        </>
    )
}

export default DownloadQRCode
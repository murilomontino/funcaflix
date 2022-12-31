import React from 'react'

const Advertisement = () => {
    return (
        <React.Fragment>
            <div className='d-flex flex-row justify-content-center w-100 align-items-center'>
                <a href='https://funcap.se.gov.br/simposio-do-xlviii-encontro-cultural-de-laranjeiras-2023/' target='_blank' rel='noreferrer'>
                    <div className='bg-white m-2 p-4 d-flex flex-row justify-content-center w-100 align-items-center card'
                        style={{
                            height: '100px',
                            borderTopWidth: '8px',
                            borderTopColor: '#9d00eb',
                            borderTopLeftRadius: '5px',
                            borderTopRightRadius: '5px',
                            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                        }}>
                        <h6 className='text-center font-weight-700 font-size-16 text-capitalize text-dark'>
                            Inscrição Simpósio do do XLVIII Encontro Cultural de Laranjeiras 2023
                        </h6>
                    </div>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Advertisement
import React from 'react'

import ItemNavBar from '@/components/atom/item-nav-bar'

const LINK_FUNCAP = 'https://www.funcap.se.gov.br/'
const LINK_GOVERNO = 'https://www.se.gov.br/'

const AboutFooter = () => {
	return (
		<React.Fragment>
			<div className="w-80 ">
				<div className="d-flex row justify-content-between m-2">
					<div className="d-flex row flex-wrap">
						<ItemNavBar
							title="Política e Privacidade"
							link="/politica-de-privacidade"
							fontVariant="proportional-nums"
						/>
						{/* <ItemNavBar title="Sobre nós" link="www.google.com" fontVariant="proportional-nums" /> */}
						<ItemNavBar
							title="Funcap"
							link={LINK_FUNCAP}
							fontVariant="proportional-nums"
						/>
						<ItemNavBar
							title="Governo do Estado de Sergipe"
							link={LINK_GOVERNO}
							fontVariant="proportional-nums"
						/>
					</div>
					<div className="d-flex row flex-wrap">
						{/* <ItemNavBar title="Lei Aldir Blank" link="/lei-aldir-blank" fontVariant="proportional-nums" /> */}
						{/* <ItemNavBar title="Sobre nós" link="www.google.com" fontVariant="proportional-nums" /> */}
					</div>
				</div>
				<div>
					<h6 className="text-white p-2 font-Weight-700 mt-1">
						© 2021 MAPA DA CULTURA DE SERGIPE. Todos os direitos reservados
					</h6>
				</div>
			</div>
		</React.Fragment>
	)
}

export default AboutFooter

import theme from '@/theme'
import { MotiView } from 'moti'
import styledWeb, { css } from 'styled-components'
import styled from 'styled-components/native'

type Props = {
	width?: string | number
	height?: string | number
	btn?: boolean
}

export const Container = styledWeb.div<Props>`
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: ${(props) => props.width || '250'}px;
  height: ${(props) => props.height || '125'}px;
  ${(props) =>
		props.btn &&
		css`
			:hover {
				transition: all 0.1s;
				background-color: rgba(0, 0, 0, 0.2);
				box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.3);
			}

			:active {
				transform: scale(0.95);
			}
		`} 
`

export const ContainerInformation = styled(MotiView)`
	flex: 1;
	background-color: ${theme.COLORS.THUMBNAIL_CARD_BACKGROUND};
	border-radius: 4px;
	z-index: 0;
	justify-content: flex-end;
	border-width: 1px;
	border-color: ${theme.COLORS.BUTTON_SECONDARY};
	border-top-width: 0;
	border-radius: 4px;
`

export const ContainerThumbnail = styledWeb.div`
  display: flex;
  flex: 1;
  width: 100%;
`

export const ContainerDescription = styledWeb.div`
  display: flex;
  flex: 2;

  @media (max-width: ${theme.CONSTANTS.SCREEN.MEDIUM}px) {
    display: none;
  }
`

export const ContainerButtons = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`

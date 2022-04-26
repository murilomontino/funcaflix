import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const Container = styledWeb.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
    flex: 1;
    height: ${theme.CONSTANTS.DOUBLE_CONTAINER_HEIGHT_CARD_ITEM};
    min-height: 300px;
`

export const ContainerInfo = styledWeb.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50%;
  width: 90vw;
  margin: 0 0rem 4rem 2rem;

  @media (max-width: ${theme.CONSTANTS.SCREEN.MEDIUM}px) {
    top: 20vh;
    width: 80vw;
  }
 
  @media (max-width: ${theme.CONSTANTS.SCREEN.SMALL}px) {
    top: 28vh;
    width: 80vw;
  }

  @media (max-width: ${theme.CONSTANTS.SCREEN.TINY}px) {
    top: 25vh;
    width: 80vw;
  }
`

export const ScrollViewContainer = styled.ScrollView`
  flex: 8;
  width: 100%;
  flex-direction: row;
  padding: 0 0 2rem 2rem;
  background-color: transparent;
  height: 100%;
`

export const InternalScrollViewContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  height: ${theme.CONSTANTS.DOUBLE_FIVE_CONTAINER_HEIGHT_CARD_ITEM};
  min-height: 250px;
`

const ContainerIcon = styledWeb.div`
  height: ${theme.CONSTANTS.HEIGHT_ITEM_THUMBNAIL};
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.1);
  top: 25%;
  width: 4vw;

  scale: 90%;
  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Left = styledWeb(ContainerIcon)`
  left: 0;
`

export const Right = styledWeb(ContainerIcon)`
  right: 0;
`

export const TouchableIcon = styled.TouchableOpacity`
  height: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
`

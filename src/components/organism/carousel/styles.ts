import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const Container = styledWeb.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
    flex: 1;
    
`

export const ContainerInfo = styledWeb.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7vw;
  width: 85vw;
  margin-left: 2rem;

  @media (max-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    top: 6.0vw;
  }

  @media (max-width: ${theme.CONSTANTS.SCREEN.MEDIUM}px) {
    top: 4vw;
  }

`

export const ScrollViewContainer = styled.ScrollView`
  flex: 8;
  width: 100%;
  flex-direction: row;
  background-color: transparent;
  height: 380px;
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
  width: 100%;
`

const ContainerIcon = styledWeb.div`
  height: ${theme.CONSTANTS.HEIGHT_ITEM_THUMBNAIL};
  min-height: 135px;
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.1);
  top: 10vw;
  
   
  width: 4vw;

  scale: 90%;
  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  
  @media (max-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    top: 5.0vw;
  }

  @media (max-width: ${theme.CONSTANTS.SCREEN.MEDIUM}px) {
    top: 9vw;
  }

  @media (max-width: ${theme.CONSTANTS.SCREEN.SMALL}px) {
    top: 8.5vw;
  }
  @media (max-width: ${theme.CONSTANTS.SCREEN.TINY}px) {
    top: 12vw;
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

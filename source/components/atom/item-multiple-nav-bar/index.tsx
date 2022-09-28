import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontVariant } from 'react-native'

type Props = {
  title: string
  link?: string
  select?: boolean
  fontVariant?: FontVariant
  passHref?: boolean
  disabled?: boolean
}

const ItemMultipleNavBar: React.FC<Props> = ({
  title,
  link,
  select = true,
  fontVariant = 'small-caps',
  passHref = false,
  disabled = false,
}) => {
  const [open, setOpen] = React.useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <div className="menu-main-menu-container">
      <Nav as="ul" id="top-menu" className="ml-auto">
        <li className="menu-item">
          Blog
          <ul className="sub-menu">
            <li className="menu-item">Blog</li>
            <li className="menu-item">Blog details</li>
          </ul>
        </li>
      </Nav>
    </div>
  )
}

export default ItemMultipleNavBar

import { useState } from 'react'

import { useCart } from '../../../ShoppingCartProvider/ShoppingCartProvider'

import HeaderLogo from '../HeaderLogo'
import CartPreview from '../../../CartPreview'
import DesktopNavigation from '../DesktopNavigation'

import { ShoppingCartOutlined } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton, Stack } from '@mui/material'

import style from './DesktopHeader.module.scss'

export default function DesktopHeader() {
  const [isCartVisible, setCartVisiblity] = useState(false)
  const { totalItemCount } = useCart()

  function hideCart() {
    setCartVisiblity(false)
  }

  function toggleCart() {
    setCartVisiblity((prevValue) => !prevValue)
  }
  return (
    <Box className={style.root}>
      <Stack direction="row" spacing={2} alignItems="center">
        <HeaderLogo />
        <DesktopNavigation />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton size="large" onClick={toggleCart}>
          <Badge badgeContent={totalItemCount} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
        <Avatar alt="user avatar" src="/images/image-avatar.png" />
      </Stack>
      <CartPreview open={isCartVisible} closeCart={hideCart} />
    </Box>
  )
}

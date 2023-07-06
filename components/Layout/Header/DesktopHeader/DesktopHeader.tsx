import { useState } from 'react'

import { useCart } from '../../../ShoppingCartProvider/ShoppingCartProvider'

import HeaderLogo from '../HeaderLogo'
import CartPreview from '../../../CartPreview'
import DesktopNavigation from '../DesktopNavigation'

import { ShoppingCartOutlined } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton, Stack, useTheme } from '@mui/material'

import style from './DesktopHeader.module.scss'

export default function DesktopHeader() {
  const [isCartVisible, setCartVisiblity] = useState(false)
  const { totalItemCount } = useCart()
  const theme = useTheme()

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
        <Avatar
          src="/images/image-avatar.png"
          alt="user avatar"
          sx={{
            '&:hover': {
              outline: '2px solid',
              outlineColor: theme.palette.primary.main,
              cursor: 'pointer',
            },
          }}
          onClick={() => {
            /*no-op*/
          }}
        />
      </Stack>
      <CartPreview open={isCartVisible} closeCart={hideCart} />
    </Box>
  )
}

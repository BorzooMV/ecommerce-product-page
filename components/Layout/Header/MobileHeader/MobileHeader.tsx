import React, { useState } from 'react'

import { useCart } from '../../../ShoppingCartProvider/ShoppingCartProvider'
import { useSidebar } from '../../SidebarProvider/SidebarProvider'
import CartPreview from '../../../CartPreview'

import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from '@mui/material'
import { Menu, ShoppingCartOutlined } from '@mui/icons-material'

import HeaderLogo from '../HeaderLogo'

export default function MobileHeader() {
  const [isCartVisible, setCartVisiblity] = useState(false)
  const theme = useTheme()
  const { totalItemCount } = useCart()
  const { openSidebar } = useSidebar()

  function hideCart() {
    setCartVisiblity(false)
  }

  function toggleCart() {
    setCartVisiblity((prevValue) => !prevValue)
  }

  return (
    <AppBar position="sticky" sx={{ background: 'white' }}>
      <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={openSidebar}>
            <Menu />
          </IconButton>
          <HeaderLogo />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={toggleCart}>
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
      </Toolbar>
      <CartPreview open={isCartVisible} closeCart={hideCart} />
    </AppBar>
  )
}

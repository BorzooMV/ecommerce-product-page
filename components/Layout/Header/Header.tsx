import React, { useState } from 'react'
import Image from 'next/image'

import { useCart } from '../../ShoppingCartProvider/ShoppingCartProvider'
import { useSidebar } from '../SidebarProvider/SidebarProvider'
import CartPreview from '../../CartPreview'

import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import { Menu, ShoppingCartOutlined } from '@mui/icons-material'

import logo from '../../../public/images/logo.svg'
import style from './Header.module.css'

export default function Header() {
  const [isCartVisible, setCartVisiblity] = useState(false)
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
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <IconButton onClick={openSidebar}>
            <Menu />
          </IconButton>
          <div className={style.logo}>
            <Image src={logo} alt="sneakers logo" />
          </div>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <IconButton onClick={toggleCart}>
            <Badge badgeContent={totalItemCount} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
          <Avatar alt="user avatar" src="/images/image-avatar.png" />
        </Stack>
      </Toolbar>
      <CartPreview open={isCartVisible} closeCart={hideCart} />
    </AppBar>
  )
}

import React from 'react'
import Image from 'next/image'

import { useCart } from '../../ShoppingCartProvider/ShoppingCartProvider'

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
  const { totalItemCount } = useCart()

  return (
    <AppBar position="sticky" sx={{ background: 'white' }}>
      <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <IconButton>
            <Menu />
          </IconButton>
          <div className={style.logo}>
            <Image src={logo} alt="sneakers logo" />
          </div>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <IconButton>
            <Badge badgeContent={totalItemCount} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
          <Avatar alt="user avatar" src="/images/image-avatar.png" />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

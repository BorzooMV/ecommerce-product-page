import React from 'react'
import { Menu, ShoppingCartOutlined } from '@mui/icons-material'
import { AppBar, Avatar, IconButton, Stack, Toolbar } from '@mui/material'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import avatarImg from '../../../public/images/image-avatar.png'
import style from './Header.module.css'

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ background: 'white' }}>
      <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <IconButton>
            <Menu />
          </IconButton>
          <div className={style.logo}>
            <Image src={logo} alt="sneakers logo" width={300} />
          </div>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <IconButton>
            <ShoppingCartOutlined />
          </IconButton>
          <Avatar alt="user avatar" src="/images/image-avatar.png" />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

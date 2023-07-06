import Link from 'next/link'

import { LinkItemProps } from './DesktopNavigation.d'
import { Typography } from '@mui/material'

import style from './DesktopNavigation.module.scss'

const links = [
  {
    title: 'Collections',
  },
  {
    title: 'Men',
  },
  {
    title: 'Women',
  },
  {
    title: 'About',
  },
  {
    title: 'Contact',
  },
]

export default function DesktopNavigation() {
  function LinkItem({ title, address = '#' }: LinkItemProps) {
    return (
      <li>
        <Link href={address}>
          <Typography>{title}</Typography>
        </Link>
      </li>
    )
  }
  return (
    <nav className={style.root}>
      <ul>
        {links.map((link) => (
          <LinkItem key={link.title} title={link.title} />
        ))}
      </ul>
    </nav>
  )
}

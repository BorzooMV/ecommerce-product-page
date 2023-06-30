import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

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
    const [isActive, setIsActive] = useState(false)

    function activeLink() {
      setIsActive(true)
    }

    function deactiveLink() {
      setIsActive(false)
    }

    return (
      <li
        onMouseEnter={activeLink}
        onMouseLeave={deactiveLink}
        className={classNames({ [style.active]: isActive })}
      >
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

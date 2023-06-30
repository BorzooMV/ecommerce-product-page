import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

import { useMediaQuery } from '@mui/material'

export default function Header() {
  const desktop = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

  if (desktop) {
    return <DesktopHeader />
  } else {
    return <MobileHeader />
  }
}

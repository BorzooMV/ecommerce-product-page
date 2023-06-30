import Image from 'next/image'
import { Box } from '@mui/material'

import logo from 'public/images/logo.svg'
export default function HeaderLogo() {
  return (
    <Box sx={{ width: '170px', position: 'relative' }}>
      <Image src={logo} alt="sneakers logo" />
    </Box>
  )
}

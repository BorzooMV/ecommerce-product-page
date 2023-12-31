import Header from './Header'
import Sidebar from './Sidebar'

import { useSidebar } from './SidebarProvider/SidebarProvider'

import { LayoutProps } from './Layout.d'
import { Box, Drawer, useMediaQuery } from '@mui/material'

export default function Layout({ children }: LayoutProps) {
  const { isSidebarOpen, closeSidebar } = useSidebar()
  const desktop = useMediaQuery((theme: any) => theme.breakpoints.up('sm'))

  return (
    <Box sx={{ pb: 6, px: desktop ? '6rem' : '0rem' }}>
      <Drawer anchor="left" open={isSidebarOpen} onClose={closeSidebar}>
        <Sidebar closeSidebar={closeSidebar} />
      </Drawer>
      <Header />
      {children}
    </Box>
  )
}

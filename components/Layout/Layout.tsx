import Header from './Header'
import Sidebar from './Sidebar'

import { useSidebar } from './SidebarProvider/SidebarProvider'

import { LayoutProps } from './Layout.d'
import { Box, Drawer } from '@mui/material'

export default function Layout({ children }: LayoutProps) {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  return (
    <Box sx={{ pb: 6 }}>
      <Drawer anchor="left" open={isSidebarOpen} onClose={closeSidebar}>
        <Sidebar closeSidebar={closeSidebar} />
      </Drawer>
      <Header />
      {children}
    </Box>
  )
}

import { SidebarProps } from './Sidebar.d'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'

import style from './Sidebar.module.scss'

export default function Sidebar({ closeSidebar }: SidebarProps) {
  return (
    <Box className={style.sidebar}>
      <Stack direction="row" sx={{ mb: 4 }}>
        <IconButton onClick={closeSidebar}>
          <Close />
        </IconButton>
      </Stack>
      <Box className={style.navWrapper}>
        <nav>
          <ul>
            <li>
              <Typography variant="h6" component="span">
                Collections
              </Typography>
            </li>
            <li>
              <Typography variant="h6" component="span">
                Men
              </Typography>
            </li>
            <li>
              <Typography variant="h6" component="span">
                Women
              </Typography>
            </li>
            <li>
              <Typography variant="h6" component="span">
                About
              </Typography>
            </li>
            <li>
              <Typography variant="h6" component="span">
                Contact
              </Typography>
            </li>
          </ul>
        </nav>
      </Box>
    </Box>
  )
}

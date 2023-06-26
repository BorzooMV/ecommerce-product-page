import React from 'react'

import { Box, Button, IconButton, Typography } from '@mui/material'
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material'

export default function CartButtonWithQuantity() {
  return (
    <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box
        sx={{
          height: '42.25px',
          borderRadius: '4px',
          padding: '0.5rem 1.375rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#f7f7f7',
        }}
      >
        <IconButton size="small">
          <Remove color="primary" fontSize="small" />
        </IconButton>
        <Typography>0</Typography>
        <IconButton size="small">
          <Add color="primary" fontSize="small" />
        </IconButton>
      </Box>
      <Button
        fullWidth
        variant="contained"
        startIcon={<ShoppingCartOutlined />}
        color="primary"
        size="large"
        sx={{ color: 'white' }}
      >
        Add to cart
      </Button>
    </Box>
  )
}

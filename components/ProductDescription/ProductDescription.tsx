import React from 'react'
import { Box, Typography } from '@mui/material'
import { ProductDescriptionProps } from './ProductDescription.d'

export default function ProductDescription({
  companyName,
  title,
  description,
}: ProductDescriptionProps) {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography color="primary">{companyName}</Typography>
      <Typography variant="h4" component="span">
        {title}
      </Typography>
      <Typography variant="body1" color="gray">
        {description}
      </Typography>
    </Box>
  )
}

import React from 'react'

import CompactPricing from '../CompactPricing'

import { ProductDescriptionProps } from './ProductDescription.d'
import { Box, Typography } from '@mui/material'

export default function ProductDescription({
  companyName,
  title,
  product,
}: ProductDescriptionProps) {
  const { description, price } = product
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography color="primary">{companyName}</Typography>
      <Typography variant="h4" component="span">
        {title}
      </Typography>
      <Typography variant="body1" color="gray">
        {description}
      </Typography>
      {price && <CompactPricing price={price} />}
    </Box>
  )
}

import React from 'react'

import CompactPricing from '../CompactPricing'
import CartButtonWithQuantity from '../CartButtonWithQuantity'

import { ProductDescriptionProps } from './ProductDescription.d'
import { Box, Typography } from '@mui/material'

export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  const { description, price } = product
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography color="primary">{product.companyName}</Typography>
      <Typography variant="h4" component="span">
        {product.title}
      </Typography>
      <Typography variant="body1" color="gray">
        {description}
      </Typography>
      {price && <CompactPricing price={price} />}
      <CartButtonWithQuantity product={product} />
    </Box>
  )
}

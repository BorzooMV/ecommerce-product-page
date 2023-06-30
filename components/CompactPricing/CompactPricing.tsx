import React from 'react'

import useCurrencyFormatter from '../../hooks/useCurrencyFormatter'

import { CompactPricingProps } from './CompactPricing.d'
import { Chip, Stack, Typography, useMediaQuery } from '@mui/material'

export default function CompactPricing({ price }: CompactPricingProps) {
  const { formatValue } = useCurrencyFormatter()
  const { initialPrice, discount } = price
  const desktop = useMediaQuery((theme: any) => theme.breakpoints.up('md'))
  return (
    <Stack
      direction={desktop ? 'column' : 'row'}
      justifyContent={desktop ? 'stretch' : 'space-between'}
      alignItems={desktop ? 'flex-start' : 'center'}
      spacing={desktop ? 1 : 0}
    >
      <Stack direction="row" sx={{ gap: '1rem' }}>
        <Typography variant="h5" component="span" fontWeight="bold">
          {discount
            ? formatValue(discount.finalPrice)
            : formatValue(initialPrice)}
        </Typography>
        {discount && (
          <Chip
            label={`${discount.value}%`}
            color="primary"
            className="light-chip"
          />
        )}
      </Stack>
      {discount && (
        <Typography color="grey" sx={{ textDecoration: 'line-through' }}>
          {formatValue(initialPrice)}
        </Typography>
      )}
    </Stack>
  )
}

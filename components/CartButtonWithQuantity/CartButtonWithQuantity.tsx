import React, { useState } from 'react'

import { useCart } from '../ShoppingCartProvider/ShoppingCartProvider'
import { CartButtonWithQuantityProps } from './CartButtonWithQuantity.d'

import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material'
import { grey } from '@mui/material/colors'

export default function CartButtonWithQuantity({
  product,
}: CartButtonWithQuantityProps) {
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()
  const desktop = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

  function incQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function decQuantity() {
    setQuantity((prevQuantity) =>
      prevQuantity - 1 < 0 ? prevQuantity : prevQuantity - 1
    )
  }

  function handleAddToCart() {
    if (!product.price) return alert('this product is unavailable!')
    if (!quantity) return alert('you must set the quantity!')
    if (!addToCart) return alert('internal error!')

    addToCart(product, quantity)
    setQuantity(0)
  }

  return (
    <Stack direction={desktop ? 'row' : 'column'} spacing={2}>
      <Box
        sx={{
          height: '42.25px',
          borderRadius: '4px',
          padding: '0.5rem 1.375rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: grey[200],
          width: desktop ? '10rem' : '100%',
        }}
      >
        <IconButton size="small" onClick={decQuantity}>
          <Remove color="primary" fontSize="small" />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton size="small" onClick={incQuantity}>
          <Add color="primary" fontSize="small" />
        </IconButton>
      </Box>
      <Button
        fullWidth
        variant="contained"
        startIcon={<ShoppingCartOutlined />}
        color="primary"
        size="large"
        onClick={handleAddToCart}
        sx={{ flex: '1 1 0px' }}
      >
        Add to cart
      </Button>
    </Stack>
  )
}

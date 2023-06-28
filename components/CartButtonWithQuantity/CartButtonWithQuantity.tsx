import React, { useState } from 'react'

import { useCart } from '../ShoppingCartProvider/ShoppingCartProvider'
import { CartButtonWithQuantityProps } from './CartButtonWithQuantity.d'

import { Box, Button, IconButton, Typography } from '@mui/material'
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material'

export default function CartButtonWithQuantity({
  product,
}: CartButtonWithQuantityProps) {
  const [quantity, setQuantity] = useState(0)
  const { addToCart, cartItems } = useCart()

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
      >
        Add to cart
      </Button>
    </Box>
  )
}

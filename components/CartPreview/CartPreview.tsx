import { useCart } from '../ShoppingCartProvider/ShoppingCartProvider'
import useCurrencyFormatter from '../../hooks/useCurrencyFormatter'

import ThumbnailOrAvatar from '../ThumbnailOrAvatar'

import { CartPreviewProps } from './CartPreview.d'
import { ICartItem } from '../ShoppingCartProvider/ShoppingCartProvider.d'
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'

import style from './CartPreview.module.scss'

export default function CartPreview({ closeCart, open }: CartPreviewProps) {
  const { totalItemCount, cartItems } = useCart()

  const { formatValue } = useCurrencyFormatter()

  function Description({ item }: { item: ICartItem }) {
    return (
      <Stack>
        <Typography color="gray">{item.name}</Typography>
        <Stack direction="row">
          <Typography color="grey" sx={{ mr: 1 }}>{`${formatValue(
            item.pricePerItem
          )} x ${item.quantity}`}</Typography>
          <Typography fontWeight="bold">
            {formatValue(item.priceTotal)}
          </Typography>
        </Stack>
      </Stack>
    )
  }

  if (!open) {
    return null
  }

  return (
    <ClickAwayListener onClickAway={closeCart}>
      <Box className={style.root}>
        <Paper className={style.wrapper} component="div">
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" component="span">
              Cart
            </Typography>
          </Box>
          <Divider />
          <Box className={style.itemsContainer}>
            {totalItemCount ? (
              cartItems?.items.map((item) => (
                <div key={item.id}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <ThumbnailOrAvatar
                      name={item.name}
                      thumbnail={item.thumbnail}
                    />
                    <Description item={item} />
                    <IconButton size="small">
                      <DeleteOutline />
                    </IconButton>
                  </Stack>
                </div>
              ))
            ) : (
              <Stack
                sx={{ height: '100%' }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography color="gray">Your cart is empty</Typography>
              </Stack>
            )}
            {totalItemCount && (
              <Button fullWidth color="primary" variant="contained">
                Checkout
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </ClickAwayListener>
  )
}

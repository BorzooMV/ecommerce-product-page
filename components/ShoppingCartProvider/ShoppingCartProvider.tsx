import { createContext, useContext, useState } from 'react'

import { getFinalPrice } from '../../utils/utils'

import { IProduct, Id } from '../../types/global'
import {
  ICartContext,
  ICartItem,
  ICartItemsState,
  ShoppingCartProviderProps,
} from './ShoppingCartProvider.d'

const CartContext = createContext<ICartContext>({
  cartItems: undefined,
  totalItemCount: undefined,
  addNewItem: undefined,
  addToExistingItem: undefined,
  addToCart: undefined,
  removeCartItem: undefined,
})

export function useCart() {
  return useContext(CartContext)
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItemsState>({
    items: [],
    totalPrice: 0,
  })

  const totalItemCount = cartItems.items.reduce(
    (total: number, item: ICartItem) => {
      return total + item.quantity
    },
    0
  )

  function addNewItem(product: IProduct, q: number) {
    const finalPrice = getFinalPrice(product)
    if (!finalPrice) return

    const newCartItem = {
      id: product.id,
      name: product.title,
      thumbnail: product.images
        ? product.images[0].thumbnail
          ? product.images[0].thumbnail
          : product.images[0].original
        : null,
      quantity: q,
      pricePerItem: finalPrice,
      priceTotal: finalPrice * q,
    }

    setCartItems((prevItems) => {
      return {
        items: [...prevItems.items, newCartItem],
        totalPrice: prevItems.totalPrice + newCartItem.priceTotal,
      }
    })
  }

  function addToExistingItem(id: Id, q: number) {
    setCartItems((prevItems) => {
      const item = prevItems.items.find((item) => item.id === id)

      if (!item) return prevItems

      const { quantity, pricePerItem, priceTotal } = item
      const { totalPrice } = prevItems

      return {
        totalPrice: Number(totalPrice) + Number(pricePerItem) * q,
        items: prevItems.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              priceTotal: priceTotal + pricePerItem * q,
              quantity: quantity + q,
            }
          } else {
            return item
          }
        }),
      }
    })
  }

  function addToCart(product: IProduct, quantity: number) {
    if (cartItems.items.find((item) => item.id === product.id)) {
      addToExistingItem(product.id, quantity)
    } else {
      addNewItem(product, quantity)
    }
  }

  function removeCartItem(id: Id) {
    setCartItems((prevItems) => {
      const removedItem = prevItems.items.find((item) => item.id === id)

      if (!removedItem) return prevItems

      return {
        totalPrice: prevItems.totalPrice - removedItem.priceTotal,
        items: [...prevItems.items.filter((item) => item.id !== id)],
      }
    })
  }

  const context = {
    cartItems,
    totalItemCount,
    addNewItem,
    addToExistingItem,
    addToCart,
    removeCartItem,
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

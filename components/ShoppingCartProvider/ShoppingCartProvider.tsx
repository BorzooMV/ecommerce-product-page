import { createContext, useContext, useState } from 'react'

import {
  ICartContext,
  ICartItemsState,
  ShoppingCartProviderProps,
} from './ShoppingCartProvider.d'
import { IProduct, Id } from '../../types/global'
import { getFinalPrice } from '../../utils/utils'

const CartContext = createContext<ICartContext>({
  cartItems: undefined,
  addNewItem: undefined,
  addToExistingItem: undefined,
  addToCart: undefined,
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

  function addNewItem(product: IProduct, q: number) {
    const finalPrice = getFinalPrice(product)
    if (!finalPrice) return

    const newCartItem = {
      id: product.id,
      name: product.title,
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

  // TODO: add remove fucntion
  // function removeFromExistingItem(id: Id) {
  //   setCartItems((prevItems) => {
  //     const item = prevItems.items.find((item) => item.id === id)

  //     if (!item) return prevItems

  //     const { quantity, pricePerItem, priceTotal } = item
  //     const { totalPrice } = prevItems

  //     return prevItems
  //   })
  // }

  const context = {
    cartItems,
    addNewItem,
    addToExistingItem,
    addToCart,
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

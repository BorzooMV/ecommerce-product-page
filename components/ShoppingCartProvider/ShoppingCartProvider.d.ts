import { ReactNode } from 'react'
import { IProduct, Id } from '../../types/global'

export type AddNewItemType = (product: IProduct, q: number) => void
export type AddToExistingItemType = (id: Id, q: number) => void
export type AddToCartType = (product: IProduct, quantity: number) => void
export type RemoveCartItemType = (id: Id) => void

export interface ShoppingCartProviderProps {
  children?: ReactNode
}

export interface ICartItem {
  id: Id
  name: string
  thumbnail: string | null
  quantity: number
  pricePerItem: number
  priceTotal: number
}

export interface ICartItemsState {
  items: ICartItem[]
  totalPrice: number
}

export interface ICartContext {
  cartItems: ICartItemsState | undefined
  totalItemCount: number | undefined
  addNewItem: AddNewItemType | undefined
  addToExistingItem: AddToExistingItemType | undefined
  addToCart: AddToCartType | undefined
  removeCartItem: RemoveCartItemType | undefined
}

import { ReactNode } from 'react'
import { IProduct, Id } from '../../types/global'

export type AddNewItemType = (product: IProduct, q: number) => void
export type AddToExistingItemType = (id: Id, q:number) => void
export type AddToCartType = (product: IProduct, quantity: number) => void


export interface ShoppingCartProviderProps {
  children?: ReactNode
}

export interface ICartItem {
  id: Id
  name: string
  quantity: number
  pricePerItem: number
  priceTotal: number
}

export interface ICartItemsState {
  items: ICartItem[] | []
  totalPrice: number
}

export interface ICartContext {
  cartItems: ICartItemsState | undefined
  addNewItem: AddNewItemType | undefined
  addToExistingItem: AddToExistingItemType | undefined
  addToCart: AddToCartType | undefined
}
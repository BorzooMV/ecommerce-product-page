import { IProduct } from '../types/global'

export function getFinalPrice(product: IProduct) {
  if (!product.price) return null
  const { price } = product

  return price.discount ? price.discount.finalPrice : price.initialPrice
}

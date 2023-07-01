import { CARUSEL_TYPENAME } from './const'

import { IImageWithAlt, IImageWithOrder, IProduct } from '../types/global'

export function getFinalPrice(product: IProduct): number | null {
  if (!product.price) return null
  const { price } = product

  return price.discount ? price.discount.finalPrice : price.initialPrice
}

export function getImagesFor(
  product: IProduct,
  purpose: 'carusel' | 'gallery'
): IImageWithAlt[] | IImageWithOrder[] {
  if (!product.images) return []

  if (purpose === CARUSEL_TYPENAME) {
    return product.images.reduce(
      (
        imagesWithOrder: IImageWithOrder[],
        currentImage,
        index
      ): IImageWithOrder[] => {
        return [
          ...imagesWithOrder,
          {
            original: currentImage.original,
            order: index,
          },
        ]
      },
      []
    )
  } else {
    return product.images.reduce(
      (
        imagesWithAlt: IImageWithAlt[],
        currentImage,
        index
      ): IImageWithAlt[] => {
        return [
          ...imagesWithAlt,
          {
            original: currentImage.original,
            thumbnail: currentImage.thumbnail,
            alt: `${product.title}${index}`,
          },
        ]
      },
      []
    )
  }
}

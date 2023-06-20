import { IImage, IImageWithOrder } from '../types/global'

type useGetCaruselImagesReturns = IImageWithOrder[]

export default function useGetCaruselImages(
  images: IImage[]
): useGetCaruselImagesReturns {
  const caruselImages = images.reduce(
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

  return caruselImages
}

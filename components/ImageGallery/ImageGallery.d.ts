import { IImageWithAlt } from '../../types/global'

export interface SmallImageProps {
  image: string
  alt: string
  isActive: boolean
  makeActive: () => void
}

export interface ImageGalleryProps {
  images: IImageWithAlt[]
}

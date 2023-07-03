import { IImageWithAlt } from '../../../types/global'

export interface SmallImageProps {
  image: string
  alt: string
  isActive: boolean
  makeActive: () => void
}

export interface ImageWithThumbnailsProps {
  images: IImageWithAlt[]
  openLightbox?: () => void
  handleClose?: () => void
}

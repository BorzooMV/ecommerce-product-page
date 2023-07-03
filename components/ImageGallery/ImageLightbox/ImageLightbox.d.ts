import { IImage, IImageWithAlt } from '../../../types/global'

export interface ImageLightboxProps {
  images: IImageWithAlt[]
  open: boolean
  onClose: () => void
}

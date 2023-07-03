import ImageWithThumbnails from '../ImageWithThumbnails'

import { ImageLightboxProps } from './ImageLightbox.d'
import { Box, Modal } from '@mui/material'
import style from './ImageLightbox.module.scss'

export default function ImageLightbox({
  images,
  open,
  onClose,
}: ImageLightboxProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className={style.root}>
        <ImageWithThumbnails images={images} handleClose={onClose} />
      </Box>
    </Modal>
  )
}

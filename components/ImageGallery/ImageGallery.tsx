import { useState } from 'react'

import ImageLightbox from './ImageLightbox'
import ImageWithThumbnails from './ImageWithThumbnails'

import { ImageGalleryProps } from './ImageGallery.d'
import { Box } from '@mui/material'

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [isLightboxOpen, setLightboxOpen] = useState(false)

  function openLightbox() {
    setLightboxOpen(true)
  }

  function closeLightbox() {
    setLightboxOpen(false)
  }

  return (
    <Box>
      <ImageLightbox
        images={images}
        open={isLightboxOpen}
        onClose={closeLightbox}
      />
      <ImageWithThumbnails images={images} openLightbox={openLightbox} />
    </Box>
  )
}

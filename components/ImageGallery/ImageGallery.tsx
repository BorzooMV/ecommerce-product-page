import { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { ImageGalleryProps, SmallImageProps } from './ImageGallery.d'
import { Box } from '@mui/material'

import style from './ImageGallery.module.scss'

function SmallImage({ image, alt, isActive, makeActive }: SmallImageProps) {
  return (
    <Box
      onClick={makeActive}
      className={classNames(style.smallImage, {
        [style.activeSmallImage]: isActive,
      })}
    >
      <Image src={image} alt={alt} fill />
    </Box>
  )
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  function makeImageActive(i: number) {
    setActiveImage(i)
  }

  return (
    <Box className={style.root}>
      <Box className={style.bigImage}>
        <Image
          src={images[activeImage].original}
          alt={images[activeImage].alt}
          fill
        />
      </Box>
      <Box className={style.thumbnails}>
        {images.map((image, index) => {
          const thumbnail = image.thumbnail || image.original
          if (!thumbnail) {
            return null
          } else
            return (
              <SmallImage
                key={index + image.alt}
                image={thumbnail}
                alt={image.alt}
                isActive={activeImage === index}
                makeActive={() => makeImageActive(index)}
              />
            )
        })}
      </Box>
    </Box>
  )
}

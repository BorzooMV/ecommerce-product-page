import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import {
  ImageWithThumbnailsProps,
  SmallImageProps,
} from './ImageWithThumbnails.d'
import { Box, IconButton, Stack } from '@mui/material'
import { Close } from '@mui/icons-material'

import style from './ImageWithThumbnails.module.scss'
import prevIcon from 'public/images/icons/icon-previous.svg'
import nextIcon from 'public/images/icons/icon-next.svg'

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

export default function ImageWithThumbnails({
  images,
  openLightbox,
  handleClose,
}: ImageWithThumbnailsProps) {
  const [activeImage, setActiveImage] = useState(0)

  function makeImageActive(i: number) {
    setActiveImage(i)
  }

  function handleClickBigImage() {
    openLightbox && openLightbox()
  }

  function changeActiveImage(direction: 'next' | 'previous') {
    if (direction === 'previous') {
      setActiveImage((prevActiveImage) =>
        prevActiveImage - 1 < 0 ? images.length - 1 : prevActiveImage - 1
      )
    } else {
      setActiveImage((prevActiveImage) =>
        prevActiveImage + 1 === images.length ? 0 : prevActiveImage + 1
      )
    }
  }

  return (
    <Box className={style.root}>
      {!openLightbox && (
        <IconButton className={style.closeButton} onClick={handleClose}>
          <Close color="primary" />
        </IconButton>
      )}
      <Box>
        {!openLightbox && (
          <Stack
            direction="row"
            className={style.actionButtons}
            sx={{ justifyContent: 'space-between' }}
          >
            <IconButton onClick={() => changeActiveImage('previous')}>
              <Image src={prevIcon} alt="previous" width={8} height={8} />
            </IconButton>
            <IconButton onClick={() => changeActiveImage('next')}>
              <Image src={nextIcon} alt="next" width={8} height={8} />
            </IconButton>
          </Stack>
        )}
        <Box
          className={style.bigImage}
          onClick={handleClickBigImage}
          sx={{ cursor: openLightbox ? 'pointer' : 'initial' }}
        >
          <Image
            src={images[activeImage].original}
            alt={images[activeImage].alt}
            fill
          />
        </Box>
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

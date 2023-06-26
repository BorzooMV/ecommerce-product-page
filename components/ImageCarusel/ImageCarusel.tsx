import React, { useState } from 'react'
import Image from 'next/image'

import { IconButton, Stack } from '@mui/material'

import { ImageCaruselProps } from './ImageCarusel.d'
import style from './ImageCarusel.module.scss'
import prevIcon from '../../public/images/icons/icon-previous.svg'
import nextIcon from '../../public/images/icons/icon-next.svg'

export default function ImageCarusel({ images }: ImageCaruselProps) {
  const [currentStep, setCurrentStep] = useState(0)

  function handleNextButton() {
    if (!images) return

    setCurrentStep((prevStep) => {
      if (prevStep === images.length - 1) {
        return 0
      } else {
        return prevStep + 1
      }
    })
  }

  function handlePreviousButton() {
    if (!images) return

    setCurrentStep((prevStep) => {
      if (prevStep === 0) {
        return images.length - 1
      } else {
        return prevStep - 1
      }
    })
  }

  if (!images) return null

  return (
    <div className={style.root}>
      <Image
        src={images[currentStep].original}
        alt={`product image ${currentStep + 1}`}
        fill
      />
      <Stack
        direction="row"
        className={style.actionButtons}
        sx={{ justifyContent: 'space-between' }}
      >
        <IconButton onClick={handlePreviousButton}>
          <Image src={prevIcon} alt="previous" width={8} height={8} />
        </IconButton>
        <IconButton onClick={handleNextButton}>
          <Image src={nextIcon} alt="next" width={8} height={8} />
        </IconButton>
      </Stack>
    </div>
  )
}

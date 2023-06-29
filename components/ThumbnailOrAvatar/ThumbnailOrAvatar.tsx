import Image from 'next/image'

import { ThumbnailOrAvatarProps } from './ThumbnailOrAvatar.d'
import { Avatar, Box } from '@mui/material'

import style from './ThumbnailOrAvatar.module.scss'

export default function ThumbnailOrAvatar({
  name,
  thumbnail,
}: ThumbnailOrAvatarProps) {
  if (thumbnail) {
    return (
      <Box className={style.imageWrapper}>
        <Image src={thumbnail} alt={`${name} image`} fill />
      </Box>
    )
  } else {
    return <Avatar>{name[0]}</Avatar>
  }
}

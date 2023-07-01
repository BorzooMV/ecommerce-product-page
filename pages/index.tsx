import { getImagesFor } from '../utils/utils'
import { CARUSEL_TYPENAME, GALLERY_TYPENAME } from '../utils/const'

import ImageCarusel from '../components/ImageCarusel'
import ImageGallery from '../components/ImageGallery'
import ProductDescription from '../components/ProductDescription'

import { Box, Stack, useMediaQuery } from '@mui/material'

import sampleProduct from '../data/sampleProduct.json'

export default function Home() {
  const desktop = useMediaQuery((theme: any) => theme.breakpoints.up('md'))
  const productImagesForCarusel = getImagesFor(sampleProduct, CARUSEL_TYPENAME)
  const productImagesForImageGallery = getImagesFor(
    sampleProduct,
    GALLERY_TYPENAME
  )

  // FIXME: consider rewrite getImagesFor utility function to solve issue below
  return (
    <main>
      {!desktop && <ImageCarusel images={productImagesForCarusel} />}
      <Stack
        direction={desktop ? 'row' : 'column'}
        sx={{ gap: '5rem', maxWidth: '900px', margin: 'auto' }}
      >
        {desktop && (
          <Box sx={{ flex: '1 1 0px' }}>
            <ImageGallery images={productImagesForImageGallery} />
          </Box>
        )}
        <Box sx={{ flex: '1 1 0px' }}>
          <ProductDescription product={sampleProduct} />
        </Box>
      </Stack>
    </main>
  )
}

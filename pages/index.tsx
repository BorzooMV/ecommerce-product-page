import useGetCaruselImages from '../hooks/useGetCaruselImages'
import ImageCarusel from '../components/ImageCarusel'
import ImageGallery from '../components/ImageGallery'
import ProductDescription from '../components/ProductDescription'

import { Box, Stack, useMediaQuery } from '@mui/material'

import sampleProduct from '../data/sampleProduct.json'

export default function Home() {
  const desktop = useMediaQuery((theme: any) => theme.breakpoints.up('md'))
  const productImages = useGetCaruselImages(sampleProduct.images)
  return (
    <main>
      {!desktop && <ImageCarusel images={productImages} />}
      <Stack direction={desktop ? 'row' : 'column'}>
        {desktop && (
          <Box sx={{ flex: '1 1 0px' }}>
            <ImageGallery />
          </Box>
        )}
        <Box sx={{ flex: '1 1 0px' }}>
          <ProductDescription product={sampleProduct} />
        </Box>
      </Stack>
    </main>
  )
}

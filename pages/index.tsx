import ImageCarusel from '../components/ImageCarusel'
import ProductDescription from '../components/ProductDescription'
import useGetCaruselImages from '../hooks/useGetCaruselImages'

import sampleProduct from '../data/sampleProduct.json'

export default function Home() {
  const productImages = useGetCaruselImages(sampleProduct.images)
  return (
    <main>
      <ImageCarusel images={productImages} />
      <ProductDescription
        companyName={sampleProduct.companyName}
        title={sampleProduct.title}
        product={sampleProduct}
      />
    </main>
  )
}

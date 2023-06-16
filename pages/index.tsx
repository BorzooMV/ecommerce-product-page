import ImageCarusel from '../components/ImageCarusel'
import ProductDescription from '../components/ProductDescription'

const productImages = [
  {
    order: 0,
    path: '/images/image-product-1.jpg',
  },
  {
    order: 1,
    path: '/images/image-product-2.jpg',
  },
  {
    order: 2,
    path: '/images/image-product-3.jpg',
  },
  {
    order: 3,
    path: '/images/image-product-4.jpg',
  },
]

const productDescription = {
  companyName: 'Sneakers company',
  title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
}

export default function Home() {
  return (
    <main>
      <ImageCarusel images={productImages} />
      <ProductDescription
        companyName={productDescription.companyName}
        title={productDescription.title}
        description={productDescription.description}
      />
    </main>
  )
}

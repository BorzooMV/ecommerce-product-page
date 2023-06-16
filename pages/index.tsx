import ImageCarusel from '../components/ImageCarusel'

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

export default function Home() {
  return (
    <main>
      <ImageCarusel images={productImages} />
    </main>
  )
}

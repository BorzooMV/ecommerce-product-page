export interface IImage {
  original: string
  thumbnail?: string
}

export interface IImageWithOrder extends IImage {
  order: number
}

export interface IPrice {
  initialPrice: number
  discount?: {
    value: number
    finalPrice: number
  }
}

export interface IProduct {
  companyName: string
  title: string
  description: string
  price?: IPrice
  images?: IImage[]
}

export type Id = string

export interface IImage {
  original: string
  thumbnail?: string
}

export interface IImageWithOrder extends IImage {
  order: number
}

export interface IImageWithAlt extends IImage {
  alt: string
}

export interface IPrice {
  initialPrice: number
  discount?: {
    value: number
    finalPrice: number
  }
}

export interface IProduct {
  id: Id
  companyName: string
  title: string
  description: string
  price?: IPrice
  images?: IImage[]
}

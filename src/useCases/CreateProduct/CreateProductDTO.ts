export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  image?: string;
  discountPercentage?: number;
}

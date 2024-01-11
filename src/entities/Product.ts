export class Product {
  public readonly id: string;
  public name: string;
  public price: number;
  public description: string;
  public image?: string | null;
  public discountPercentage?: number;

  constructor(props: Omit<Product, "id">) {
    Object.assign(this, props);
  }
}

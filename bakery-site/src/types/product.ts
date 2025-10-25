export type ProductCategory = "cakes" | "chocolates";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export interface ProductDatabase {
  products: Product[];
}

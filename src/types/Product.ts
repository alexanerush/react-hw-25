export interface Product {
  id: string | number;
  img: string;
  meal: string;
  price: number;
  instructions?: string;
  category?: string;
}
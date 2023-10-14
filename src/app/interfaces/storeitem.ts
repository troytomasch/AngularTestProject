export interface StoreItem {
  id: number;
  name: string;
  price: number;
  available: boolean;
  quantity: number;
  image?: string;
  description?: string;
}

export interface Basket2 {
  id: number;
  buyerId: string;
  items: BasketItem2[];
}

export interface BasketItem2 {
  id: number;
  quantity: number;
  productId: number;
  product: BasketProduct;
  basketId: number;
  basket: string;
}

export interface BasketProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  type: string;
  brand: string;
  quantityInStock: number;
}

export interface Basket {
  id: number;
  buyerId: string;
  items: BasketItem[];
}

export interface BasketItem {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
}

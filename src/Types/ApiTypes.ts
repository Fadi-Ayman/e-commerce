import { ProductType } from "./ProductTypes";

export type ApiOrders = {
  id: string;
  userId: string;
  createdAt: string;
  date: string;
  status: "delevered" | "pending";
  price: number;
}

export type WishListApi = {
  id: string;
  userId:string
  createdAt: string;
  product: Pick<ProductType,"id"|"name"|"image"|"price">
}

export type CartApi = {
  id: string;
  createdAt: string;
  product: Pick<ProductType,"id"|"name"|"image"|"price">& {
    quantity: number,
    totalPrice: number
  }
}


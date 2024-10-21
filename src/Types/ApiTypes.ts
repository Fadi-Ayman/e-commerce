import { ProductType } from "./ProductTypes";

export type PaymentMethods = "pay-on-delivery" | "credit-card";
export type Status = "delevered" | "pending";

export type ApiOrders = {
  id: string;
  userId: string;
  createdAt: string;
  paymentMethod: PaymentMethods;
  date: string;
  status: Status
  totalPrice: number;
  product: Pick<ProductType, "id" | "name" | "image" | "price">&{
    quantity:number
  }[]
}

export type WishListApi = {
  id: string;
  userId:string
  createdAt: string;
  product: Pick<ProductType,"id"|"name"|"image"|"price">
}





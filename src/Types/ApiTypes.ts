import { ProductType } from "./ProductTypes";
import { CartItemType } from "./Types";

export type PaymentMethods = "pay-on-delivery" | "credit-card";
export type Status = "delevered" | "pending";

type userDataForOrders ={
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  governorate: string;
  city: string;
  address: string;
}

export type ApiOrders = {
  id: string;
  createdAt: string;
  paymentMethod: PaymentMethods;
  status: Status
  totalPrice: number;
  userCart: CartItemType[]
  user : userDataForOrders
}

export type ApiWishList = {
  id: string;
  userId:string
  createdAt: string;
  product: Pick<ProductType,"id"|"name"|"image"|"price">
}

export type ApiUser = {
  id: string;
  firstName: string;
  lastName: string;
  image?: string;
  createdAt: string;
  orders: ApiOrders[]
  wishList: ApiWishList[]
}




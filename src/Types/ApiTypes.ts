import { ProductType } from "./ProductTypes";
import { CartItemType } from "./Types";

export type PaymentMethods = "pay-on-delivery" | "credit-card";
export type Status = "delevered" | "pending";

type userDataForOrders ={
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
  userId: string;
  createdAt: string;
  paymentMethod: PaymentMethods;
  status: Status
  totalPrice: number;
  userDetails : userDataForOrders
  orderItems: CartItemType[]
}

export type ApiWishList = {
  id: string;
  userId:string
  createdAt: string;
  products: Pick<ProductType,"id"|"name"|"image"|"price">[]
}

export type ApiUserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string
  accessToken: string
};

export type RegisterFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginFormInputs = {
  email: string;
  password: string;
};
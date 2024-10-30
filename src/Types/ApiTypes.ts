import { ProductType } from "./ProductTypes";
import { CartItemType } from "./Types";

export type PaymentMethods = "pay-on-delivery" | "credit-card";
export type Status = "delevered" | "pending";

type userDataForOrders = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  governorate: string;
  city: string;
  address: string;
};

export type ApiOrders = {
  id: string;
  userId: string;
  createdAt: string;
  paymentMethod: PaymentMethods;
  status: Status;
  totalPrice: number;
  userDetails: userDataForOrders;
  orderItems: CartItemType[];
};



export type ApiWishlistItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  productId: string;
  wishlistId: string;
};


export type ApiWishlist = [{
  id: string;
  userId: string;
  createdAt: string;
  wishlist_items: ApiWishlistItem[];
}];


export type ApiUserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  accessToken: string;
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

export type UpdateFormInputsType = {
  firstName: string | null;
  lastName: string | null;
  email: string;
  oldPassword: string | null;
  newPassword: string | null;
  confirmPassword: string | null;
};

export type UpdateUserImageType = {
  image: FormData;
  fileName: string;
};

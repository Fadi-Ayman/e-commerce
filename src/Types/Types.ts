import { ApiOrders } from "./ApiTypes";
import { ProductType } from "./ProductTypes";

export type NavLink = {
  label: string;
  href: string;
  icon?: JSX.Element;
};


export type Logo = { label: string; imageSrc: string };

export type FilterAndSortType = {
  label: string;
  value: string;
};

export type WishListHeaderLabelsType = ["Product", "Price", "Action", "Remove"];
export type CartListHeaderLabelsType = [
  "Product",
  "Quantity",
  "Price",
  "Sub-Total",
  "Remove"
];
export type OrderListHeaderLabelsType = ["Order Id", "Date", "Status", "Price"];

export type OrdersRowsType = Pick<
  ApiOrders,
  "id" | "createdAt" | "status" | "totalPrice"
>;

export type CartItemType = Pick<ProductType, "id" | "name" | "image" | "price"> &
  {
    quantity: number;
    subTotal: number;
  }

  export type LocalStorageUser = {
    id:string
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  };

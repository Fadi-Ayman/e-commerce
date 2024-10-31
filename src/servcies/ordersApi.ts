import axios from "axios";
import { ApiOrders } from "../Types/ApiTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;
const API_KEY = import.meta.env.VITE_API_KEY as string;

export async function createNewOrder({
  paymentMethod,
  totalPrice,
  orderItems,
  userDetails,
  status,
}: Omit<ApiOrders, "userId" | "id" | "createdAt">): Promise<void> {
  const url = `${BASE_URL}/rest/v1/orders`;
  const userId = JSON.parse(localStorage.getItem("user") as string)?.id;

  if (!userId) throw new Error("User not authenticated");

  const bodyParams = {
    userId,
    paymentMethod,
    status,
    totalPrice,
    userDetails,
    orderItems,
  };
  const accessToken = localStorage.getItem("token");

  if (!accessToken) throw new Error("Access token not found");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    await axios.post(url, bodyParams, { headers });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Axios error occurred";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred");
  }
}

export async function getUserOrders(): Promise<ApiOrders[]> {
  const userId = JSON.parse(localStorage.getItem("user") as string)?.id;
  if (!userId) throw new Error("User not authenticated");

  const url = `${BASE_URL}/rest/v1/orders?userId=eq.${userId}`;
  const accessToken = localStorage.getItem("token");

  if (!accessToken) throw new Error("Access token not found");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const res = await axios.get<ApiOrders[]>(url, { headers });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Axios error occurred";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred");
  }
}
export async function getUserLastOrder(): Promise<ApiOrders | null> {
  const userId = JSON.parse(localStorage.getItem("user") as string)?.id;
  if (!userId) throw new Error("User not authenticated");

  const url = `${BASE_URL}/rest/v1/orders?userId=eq.${userId}&order=createdAt.desc&limit=1`;
  const accessToken = localStorage.getItem("token");

  if (!accessToken) throw new Error("Access token not found");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const res = await axios.get<ApiOrders[]>(url, { headers });
    return res.data[0] || null; // Return null if no order is found
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Axios error occurred";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred");
  }
}


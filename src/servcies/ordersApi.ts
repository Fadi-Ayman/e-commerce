import axios from "axios";
import { ApiOrders, ApiuserData } from "../Types/ApiTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function createNewOrder({
  userId,
  paymentMethod,
  totalPrice,
  orderItems,
  userDetails,
  status,
}: ApiOrders) {
  const url = `${BASE_URL}/rest/v1/orders`;
  const bodyParams = {
    userId,
    paymentMethod,
    status,
    totalPrice,
    userDetails,
    orderItems,
  };

  const userData: ApiuserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const accessToken = userData.accessToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    await axios.post(url, bodyParams, { headers });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response error message:", error.response.data.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

export async function getUserOrders(userId: string) {
  const url = `${BASE_URL}/rest/v1/orders?userId=eq.${userId}`;
  const userData: ApiuserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const accessToken = userData.accessToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const res = await axios.get(url, { headers });
    return res.data;


  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response error message:", error.response.data.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

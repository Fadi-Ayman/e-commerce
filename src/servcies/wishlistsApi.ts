import axios from "axios";
import { ApiuserData } from "../Types/ApiTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Used only for SignUp for (New Users)
export async function addWishlistRowForNewUser(
  userId: string,
  accessToken: string
) {
  const url = `${BASE_URL}/rest/v1/wishlists`;

  const bodyParams = {
    userId,
  };

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

export async function getUserWishlists(userId: string) {
  const url = `${BASE_URL}/rest/v1/wishlists?select=*,wishlist_items(*)&userId=eq.${userId}`;

  const userData:ApiuserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  )

  const accessToken = userData.accessToken

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

export async function addNewWishListItem(
  wishlistId: string,
  productId: string,
  productName: string,
  productImage: string,
  productPrice: number
) {
  const url = `${BASE_URL}/rest/v1/wishlist_items`;
  const bodyParams = {
    wishlistId,
    productId,
    productName,
    productImage,
    productPrice,
  };

  const userData:ApiuserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  )
  const accessToken = userData.accessToken

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


export async function deleteWishListItem(wishlistItemId: string) {
  const url = `${BASE_URL}/rest/v1/wishlist_items?id=eq.${wishlistItemId}`;

  const userData:ApiuserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  )
  const accessToken = userData.accessToken

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    await axios.delete(url, { headers });
    
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
import axios from "axios";
import { ApiWishlistItem } from "../Types/ApiTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Used only for SignUp for (New Users)
export async function addWishlistRowForNewUser(
  userId: string,
  accessToken: string
): Promise<void> {
  const url = `${BASE_URL}/rest/v1/wishlists`;
  const bodyParams = { userId };
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const response = await axios.post(url, bodyParams, { headers });
    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "Unknown server error";
      throw new Error(`Failed to create wishlist entry: ${errorMessage}`);
    } else {
      throw new Error(
        "An unexpected error occurred while creating wishlist entry"
      );
    }
  }
}

export async function getUserWishlists(): Promise<ApiWishlistItem[]> {
  if (!localStorage.getItem("token")) {
    return [];
  }

  const userId = JSON.parse(localStorage.getItem("user")!).id;
  const url = `${BASE_URL}/rest/v1/wishlists?select=*,wishlist_items(*)&userId=eq.${userId}`;
  const accessToken = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const res = await axios.get(url, { headers });
    if (!(res.status >= 200 && res.status < 300)) {
      throw new Error(`Unexpected response status: ${res.status}`);
    }
    const wishlistId = res.data[0].id;
    if (!localStorage.getItem("wishlistId")) {
      localStorage.setItem("wishlistId", wishlistId);
    }

    return res.data[0].wishlist_items;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "Unknown server error";
      throw new Error(`Failed to fetch user wishlists: ${errorMessage}`);
    } else {
      throw new Error(
        "An unexpected error occurred while fetching user wishlists"
      );
    }
  }
}

export async function addNewWishListItem({
  image,
  name,
  price,
  productId,
  wishlistId,
}: Omit<ApiWishlistItem, "id">): Promise<void> {
  const url = `${BASE_URL}/rest/v1/wishlist_items`;
  const bodyParams = {
    wishlistId,
    productId,
    name,
    image,
    price,
  };
  const accessToken = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const res = await axios.post(url, bodyParams, { headers });
    if (!(res.status >= 200 && res.status < 300)) {
      throw new Error(`Unexpected response status: ${res.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "Unknown server error";
      throw new Error(`Failed to add new wishlist item: ${errorMessage}`);
    } else {
      throw new Error(
        "An unexpected error occurred while adding a new wishlist item"
      );
    }
  }
}

export async function deleteWishListItem(productId: string): Promise<void> {
  const url = `${BASE_URL}/rest/v1/wishlist_items?productId=eq.${productId}`;
  const accessToken = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const res = await axios.delete(url, { headers });
    if (!(res.status >= 200 && res.status < 300)) {
      throw new Error(`Unexpected response status: ${res.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "Unknown server error";
      throw new Error(`Failed to delete wishlist item: ${errorMessage}`);
    } else {
      throw new Error(
        "An unexpected error occurred while deleting the wishlist item"
      );
    }
  }
}

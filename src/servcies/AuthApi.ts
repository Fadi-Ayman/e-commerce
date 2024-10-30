import axios from "axios";
import { addWishlistRowForNewUser } from "./wishlistsApi";
import {
  ApiUserData,
  LoginFormInputs,
  RegisterFormInputs,
} from "../Types/ApiTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function signUp({
  firstName,
  lastName,
  email,
  password,
}: RegisterFormInputs) {
  const url = `${BASE_URL}/auth/v1/signup`;

  const bodyParams = {
    email,
    password,
    data: {
      firstName,
      lastName,
      image: "",
    },
  };

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
  };

  try {
    const res = await axios.post(url, bodyParams, { headers });

    const { access_token: accessToken } = res.data;
    const { id, user_metadata } = res.data.user;
    const { firstName, lastName, email, image } = user_metadata;

    const userData: ApiUserData = {
      accessToken,
      id,
      firstName,
      lastName,
      email,
      image,
    };

    await addWishlistRowForNewUser(id, accessToken);
    return userData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      }
    }
    throw error;
  }
}

export async function signIn({ email, password }: LoginFormInputs) {
  const url = `${BASE_URL}/auth/v1/token?grant_type=password`;

  const bodyParams = {
    email,
    password,
  };

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
  };

  try {
    const res = await axios.post(url, bodyParams, { headers });

    const { access_token: accessToken } = res.data;
    const { id, user_metadata } = res.data.user;
    const { firstName, lastName, email, image } = user_metadata;

    const userData: ApiUserData = {
      accessToken,
      id,
      firstName,
      lastName,
      email,
      image,
    };

    return userData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      }
    }
    throw error;
  }
}

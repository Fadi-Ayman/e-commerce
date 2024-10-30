import axios from "axios";
import {
  ApiUserData,
  UpdateFormInputsType,
  UpdateUserImageType,
} from "../Types/ApiTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Function that handle all of that Without image
export async function updateUserTextForm({
  firstName = JSON.parse(localStorage.getItem("user")!)?.firstName || null,
  lastName = JSON.parse(localStorage.getItem("user")!)?.lastName || null,
  newPassword = null,
}: Omit<
  UpdateFormInputsType,
  "email" | "oldPassword" | "confirmPassword"
>): Promise<Omit<ApiUserData, "accessToken">> {
  const url = `${BASE_URL}/auth/v1/user`;
  const bodyParams = {
    password: newPassword,
    data: {
      firstName,
      lastName,
    },
  };

  const accessToken = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const res = await axios.put(url, bodyParams, { headers });

    const { id, user_metadata } = res.data;
    const { firstName, lastName, email, image } = user_metadata;

    const userData: Omit<ApiUserData, "accessToken"> = {
      id,
      firstName,
      lastName,
      email,
      image,
    };

    return userData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        throw new Error(error.response.data.msg);
      }
    }
    console.error(error);
    throw new Error("An unexpected error occurred"); // Fallback error handling
  }
}

export async function verifyPassword(
  email: string,
  oldPassword: string
): Promise<boolean> {
  const url = `${BASE_URL}/auth/v1/token?grant_type=password`;

  const bodyParams = {
    email,
    password: oldPassword,
  };

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
  };

  try {
    // Attempt to sign in with the provided email and old password
    await axios.post(url, bodyParams, { headers });

    // If sign-in succeeds, the password is correct
    return true;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      // If there's a 400 error, throw a specific error message for incorrect password
      throw new Error("Old password is wrong");
    }
    // Log and rethrow any other errors
    console.error("Error verifying password:", error);
    throw new Error("An error occurred while verifying the password");
  }
}

export async function updateUserImage({
  image,
  fileName,
}: UpdateUserImageType): Promise<string> {
  if (!image || !fileName) {
    throw new Error("Missing image or file name name is Invalid");
  }

  const fileNameInSupabase = `${Math.random().toFixed(5)}-${fileName}`;
  const url = `${BASE_URL}/storage/v1/object/usersImages/${fileNameInSupabase}`;
  const accessToken = localStorage.getItem("token");

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    // Step 1: Upload the image
    const uploadResponse = await axios.post(url, image, { headers });

    // Step 2: Check the response status for successful upload
    if (uploadResponse.status >= 200 && uploadResponse.status < 300) {
      // Construct the URL of the uploaded image
      const uploadedImageUrl = `${BASE_URL}/storage/v1/object/usersImages/${fileNameInSupabase}`;

      // Step 3: Update user data with the uploaded image URL
      const updateUrl = `${BASE_URL}/auth/v1/user`;
      const bodyParams = { data: { image: uploadedImageUrl } };

      const updateHeaders = {
        "Content-Type": "application/json",
        apiKey: API_KEY,
        Authorization: `Bearer ${accessToken}`,
      };

      // Send the update request
      await axios.put(updateUrl, bodyParams, { headers: updateHeaders });

      // Step 4: Return the uploaded image URL
      return uploadedImageUrl; // Return the uploaded image URL
    } else {
      throw new Error("Failed to upload image");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.error);
      }
    }
    throw new Error("Error uploading and updating image");
  }
}

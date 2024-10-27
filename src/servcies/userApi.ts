import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const accessToken =
  "eyJhbGciOiJIUzI1NiIsImtpZCI6InZ1ckxzMndyd3ZCZ3dmZnYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL21jZ2Rla3VqcHRic2Ryd2lpdW5rLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJlYTA2YzI2Mi1jNWE2LTQ1OWQtYTIxMy0xZmFlNTQwNmNhMWUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwNTU5Mzk0LCJpYXQiOjE3Mjk5NTQ1OTQsImVtYWlsIjoiZmFkeUBleGFtcGxlLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJmYWR5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJzdE5hbWUiOiJmYWR5IiwiaW1hZ2UiOiIiLCJsYXN0TmFtZSI6IkF5bWFuIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiJlYTA2YzI2Mi1jNWE2LTQ1OWQtYTIxMy0xZmFlNTQwNmNhMWUifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcyOTk1NDU5NH1dLCJzZXNzaW9uX2lkIjoiZDUxYWIyYjYtZjZlOS00YTVjLWI2MDEtMTA3NDI3MTc1ZjIyIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.7TlJrEvDZZxcdNZgg2Gid0rIq1SNH1pOHfBXPLH6u0E";

export async function updateUser(
  firstName: string, // as default will get data from loacal storage
  lastName: string, // as default will get data from loacal storage
  password: string
) {
  // Check if oldPassword is True to Change Password ,as make user login again (workAround)
  const isPassword = !!password;
  const isName = !!(firstName && lastName);
  const isCompleteForm = !!(firstName && lastName && password);

  if (isCompleteForm) {
    await updateUserFullForm(firstName, lastName, password);
    return
  }

  if (isPassword) {
    await updateUserPassword(password);
  }

  if (isName) {
    await updateUserName(firstName, lastName);
  }
}

export async function updateUserFullForm(
  firstName: string, // as default will get data from loacal storage
  lastName: string, // as default will get data from loacal storage
  password: string
) {
  const url = `${BASE_URL}/auth/v1/user`;
  const bodyParams = {
    password,
    data: {
      firstName,
      lastName,
    },
  };

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
    Authorization: `Bearer ${accessToken}`, //Local Storage
  };

  try {
    axios.put(url, bodyParams, { headers });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        throw new Error(error.response.data.msg);
      }
    }
  }
}

export async function updateUserName(
  firstName: string, // as default will get data from loacal storage
  lastName: string // as default will get data from loacal storage
) {
  const url = `${BASE_URL}/auth/v1/user`;
  const bodyParams = {
    data: {
      firstName,
      lastName,
    },
  };

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
    Authorization: `Bearer ${accessToken}`, //Local Storage
  };

  try {
    axios.put(url, bodyParams, { headers });
  } catch (error) {
    console.error(error);
    throw new Error("Error updating name");
  }
}

export async function updateUserPassword(password: string) {
  const url = `${BASE_URL}/auth/v1/user`;
  const bodyParams = {
    password,
  };

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
    Authorization: `Bearer ${accessToken}`, //Local Storage
  };

  try {
    await axios.put(url, bodyParams, { headers });
  } catch (error) {
    console.error(error);
    throw new Error("Error updating password");
  }
}

export async function updateUserImage(image: string) {
  const url = `${BASE_URL}/auth/v1/user`;
  const bodyParams = {
    data: {
      image,
    },
  };

  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
    Authorization: `Bearer ${accessToken}`, //Local Storage
  };

  try {
    const res = await axios.put(url, bodyParams, { headers });
  } catch (error) {
    console.error(error);
    throw new Error("Error updating Image");
  }
}

export async function uploadImage(image: FormData, fileName: string) {
  const fileNameinSupabase = `${Math.random().toFixed(5)}-${fileName}`;
  const url = `${BASE_URL}/storage/v1/object/usersImages/${fileNameinSupabase}`;
  const bodyParams = image;

  // const userData = JSON.parse(localStorage.getItem("userData") || "{}")
  // const accessToken = userData.accessToken

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${accessToken}`,
    apiKey: API_KEY,
  };

  try {
    const res = await axios.post(url, bodyParams, { headers });

    if (res.status >= 200 && res.status < 300) {
      await updateUserImage(url);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        throw new Error(error.response.data.error);
      }
    }
  }
}

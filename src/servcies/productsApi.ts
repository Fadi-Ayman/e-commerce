import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getAllProducts() {
  const url = `${BASE_URL}/rest/v1/products`;
  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
  };

  try {
    const res = await axios.get(url, { headers });
    return res.data;
  }  catch  {
    throw new Error("Error fetching products");
  }
}


export async function getProduct(productId:string){
  const url = `${BASE_URL}/rest/v1/products?id=eq.${productId}`;
  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
  };

  try {
    const res = await axios.get(url, { headers });
    return res.data[0]
    
  } catch  {
    throw new Error("Error fetching product");
  }
}


export async function getProducsByCategory(categoryName:string){
  const url = `${BASE_URL}/rest/v1/products?category=eq.${categoryName}`;
  const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
  };

  try {
    const res = await axios.get(url, { headers });
    return res.data
    
  }  catch  {
    throw new Error("Error fetching sugessted products");
  }
}

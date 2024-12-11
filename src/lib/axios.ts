import axios from "axios";

const baseURL = typeof window === 'undefined' 
  ? process.env.NEXT_PUBLIC_API_URL 
  : '/api';

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    ...(typeof window === 'undefined' && {
      key: "c2d05d6630ce1a0a4f9f5ed9c0a594c3",
    }),
  },
});

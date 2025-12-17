import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const getBookings = async () => {
  const res = await api.get("/bookings");
  return res.data;
};

export const addBooking = async (data) => {
  const res = await api.post("/bookings", data);
  return res.data;
};

export default api;

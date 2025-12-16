import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings";

export const getBookings = () => axios.get(API_URL);
export const addBooking = (data) => axios.post(API_URL, data);
export const updateBooking = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBooking = (id) => axios.delete(`${API_URL}/${id}`);

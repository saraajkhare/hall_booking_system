import { useEffect, useState } from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import { getBookings, addBooking, updateBooking, deleteBooking } from "./api";

function App() {
  const [bookings, setBookings] = useState([]);
  const [editData, setEditData] = useState(null);

  const loadBookings = () => {
    getBookings().then(res => setBookings(res.data));
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleSubmit = (data) => {
    if (editData) {
      updateBooking(editData.id, data).then(() => {
        setEditData(null);
        loadBookings();
      });
    } else {
      addBooking(data).then(() => loadBookings());
    }
  };

  const handleDelete = (id) => {
    deleteBooking(id).then(() => loadBookings());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hall Booking System</h1>

      <BookingForm onSubmit={handleSubmit} editingData={editData} />
      <hr />

      <BookingList bookings={bookings} onDelete={handleDelete} onEdit={setEditData} />
    </div>
  );
}

export default App;

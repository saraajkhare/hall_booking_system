import { useEffect, useState } from "react";
import { getBookings, addBooking } from "./api";
import "./App.css";


function App() {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    hallName: "",
    date: "",
    startTime: "",
    endTime: "",
    organizer: "",
    contact: "",
  });

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const data = await getBookings();
    setBookings(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...form,
    startTime: form.startTime.slice(0, 5),
    endTime: form.endTime.slice(0, 5),
  };

  try {
    await addBooking(payload);
    alert("Booking successful");
    setForm({
      hallName: "",
      date: "",
      startTime: "",
      endTime: "",
      organizer: "",
      contact: "",
    });
    loadBookings();
  } catch (err) {
    console.error(err);
    alert("Booking failed");
  }
};



  return (
    <div className="container">

      <h1>Hall Booking System</h1>

      <form onSubmit={handleSubmit}>
        <input name="hallName" placeholder="Hall" value={form.hallName} onChange={handleChange} />
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <input name="startTime" type="time" value={form.startTime} onChange={handleChange} />
        <input name="endTime" type="time" value={form.endTime} onChange={handleChange} />
        <input name="organizer" placeholder="Organizer" value={form.organizer} onChange={handleChange} />
        <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} />
        <button type="submit">Book</button>
      </form>

      <div className="bookings">
  <h2>Bookings</h2>
  <ul>
    {bookings.map((b) => (
      <li key={b.id}>
        <div>
          <strong>{b.hallName}</strong>
          <span>{b.date}</span>
        </div>
        <span>{b.startTime} – {b.endTime}</span>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default App;

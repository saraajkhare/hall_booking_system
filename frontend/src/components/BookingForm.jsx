import { useState } from "react";
import api from "../api";

function BookingForm({ fetchBookings }) {
  const [hallName, setHallName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Backend-compatible payload
    const payload = {
      hallName,
      date, // YYYY-MM-DD
      startTime: startTime.slice(0, 5), // HH:mm
      endTime: endTime.slice(0, 5),     // HH:mm
      organizer,
      contact,
    };

    console.log("Submitting booking:", payload);

    try {
      await api.post("/bookings", payload);
      alert("Booking successful!");

      // reset form
      setHallName("");
      setDate("");
      setStartTime("");
      setEndTime("");
      setOrganizer("");
      setContact("");

      fetchBookings();
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Check inputs.");
    }
  };

  return (
    <div className="booking-form">
      <h2>New Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hall Name"
          value={hallName}
          onChange={(e) => setHallName(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />

        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;

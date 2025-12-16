import { useState, useEffect } from "react";

export default function BookingForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    hallName: "",
    date: "",
    startTime: "",
    endTime: "",
    organizer: "",
    contact: ""
  });

  useEffect(() => {
    if (editingData) setForm(editingData);
  }, [editingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      hallName: "",
      date: "",
      startTime: "",
      endTime: "",
      organizer: "",
      contact: ""
    });
  };

  return (
    <form className="p-3 bg-dark text-light rounded" onSubmit={handleSubmit}>
      <h3>{editingData ? "Edit Booking" : "New Booking"}</h3>

      <div className="row mt-3">
        <div className="col-md-3">
          <input className="form-control" placeholder="Hall Name"
            name="hallName" value={form.hallName} onChange={handleChange} required />
        </div>

        <div className="col-md-3">
          <input type="date" className="form-control"
            name="date" value={form.date} onChange={handleChange} required />
        </div>

        <div className="col-md-2">
          <input type="time" className="form-control"
            name="startTime" value={form.startTime} onChange={handleChange} required />
        </div>

        <div className="col-md-2">
          <input type="time" className="form-control"
            name="endTime" value={form.endTime} onChange={handleChange} required />
        </div>

        <div className="col-md-2">
          <input className="form-control" placeholder="Organizer"
            name="organizer" value={form.organizer} onChange={handleChange} required />
        </div>

        <div className="col-md-2 mt-2">
          <input className="form-control" placeholder="Contact"
            name="contact" value={form.contact} onChange={handleChange} />
        </div>
      </div>

      <button className="btn btn-primary mt-3" type="submit">
        {editingData ? "Update" : "Submit"}
      </button>
    </form>
  );
}

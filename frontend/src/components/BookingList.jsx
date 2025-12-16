export default function BookingList({ bookings, onDelete, onEdit }) {
  return (
    <div className="mt-4">
      <h3>Bookings List</h3>

      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th>Hall</th>
            <th>Date</th>
            <th>Time</th>
            <th>Organizer</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.hallName}</td>
              <td>{b.date}</td>
              <td>{b.startTime} - {b.endTime}</td>
              <td>{b.organizer}</td>
              <td>{b.contact}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(b)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => onDelete(b.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

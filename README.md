# Hall Booking System – Setup Guide

## Prerequisites

Make sure you have the following installed:

* Node.js (v18+ recommended)
* npm
* MySQL (running locally)

---

## Backend Setup

1. Open terminal and go to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure database:

* Create a MySQL database (e.g. `hall_booking`)
* Update database credentials in `.env`

Example:

```env
DB_NAME=hall_booking
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
PORT=5001
```

4. Start the backend server:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5001
```

---

## Frontend Setup

1. Open a new terminal and go to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## Access the Application

Open your browser and visit:

```
http://localhost:5173
```

You can now create and view hall bookings.

---

If you want, I can also:

* Make this README **even more minimal**
* Add a **“Demo Video (Loom)”** section
* Or write a **1-minute Loom speaking script** for submission

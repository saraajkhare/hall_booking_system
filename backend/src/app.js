const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const bookingRoutes = require("./routes/bookingRoutes");

require("dotenv").config(); // loads .env from outside path if needed

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");

        await sequelize.sync(); // creates tables
        
        app.listen(PORT, () => console.log("Server running on port " + PORT));
    } catch (err) {
        console.error("Error:", err);
    }
}

startServer();

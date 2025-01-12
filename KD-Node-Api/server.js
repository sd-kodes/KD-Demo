const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const sequelize = require("./config/db");

const User = require("./models/User");
const Registration = require("./models/Registration");
const Hitsix = require("./models/Hitsix");

const authRoutes = require("./routes/auth");
const formRoutes = require("./routes/forms");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api/auth", authRoutes);
app.use("/api/form", formRoutes);

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(3000, "0.0.0.0", () => console.log("Server running on port 3000"));

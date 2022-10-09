require("dotenv").config();
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { weatherCities, weatherCity } = require("./controller");
const { errorHandler } = require("./util");

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Weather Server is up!!");
});

app.post("/weather/cities", ...weatherCities);
app.post("/weather/city", ...weatherCity);

//error handelling middleware
app.use(errorHandler);

// Port number
const PORT = process.env.PORT || 5000;

// Server running check
app.listen(PORT, () => {
  console.log("=========================================");
  console.log(`Server listening at http://localhost:${PORT}`);
});

const cors = require("cors");
require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

app.use(
    cors({
      origin: ["http://localhost:5173"],
    })
  );

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const phonesRoutes = require("./routes/phones.routes");
app.use("/api", phonesRoutes);

require("./error-handling")(app);

module.exports = app;

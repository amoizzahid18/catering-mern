const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const clientRoute = require("./routes/clientRoutes.js");
dotenv.config();
app.use(express.json())
app.use(cors())

app.use("/", clientRoute);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});

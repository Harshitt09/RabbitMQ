const express = require("express");
const app = express();
app.use(express.json());
const route = require("./routes/route");
app.use("/", route);
app.listen(5000, () => {
    console.log("server connected");
}); 
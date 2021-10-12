const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const productsApi = require("./routes/product");
const receiptsApi = require("./routes/receipt");

app.use(cors());

app.get("/", (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

productsApi(app);
receiptsApi(app);

app.listen(port, (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});

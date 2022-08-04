const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1><h2>this is awful</h2>");
  console.log("another push for practise");
});

app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});

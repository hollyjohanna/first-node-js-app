const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const data = [
  {
    name: "carrot",
    colour: "orange",
  },
  {
    name: "broccoli",
    colour: "green",
  },
  {
    name: "yam",
    colour: "red",
  },
];

//set up a route
//set is up for the root which is a slash (/)
app.get("/", (req, res) => {
  res.send(`
  <h1>Hello World</h1>
  <h2>this is awful</h2>
  <h3>WHYYYYY</h3>
  <a href="/vegetables">view vegetables</a>
  `);
  console.log("another push for practise");
});

//set up a route for the about page
//req = request and res = response
app.get("/vegetables", (req, res) => {
  res.send(data);
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to the contact page</h1>");
});

app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});

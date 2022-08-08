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

const dinosaurs = [
  {
    name: "Velociraptor",
    imageURL:
      "https://i.pinimg.com/736x/99/7f/a2/997fa266a8c9d1b473e4978050be6414--jurassic-world-dinosaurs-jurassic-park.jpg",
    era: "Jurassic",
  },
  {
    name: "Tyrannosaurus Rex",
    imageURL: "https://scx2.b-cdn.net/gfx/news/2022/tyrannosaurus-rex.jpg",
    era: "Cretaceous",
  },
  {
    name: "Triceratops",
    imageURL:
      "https://thumbs.dreamstime.com/b/triceratops-figurine-white-background-40351472.jpg",
    era: "Cretaceous",
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

app.get("/dinosaurs", (req, res) => {
  res.send(dinosaurs);
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to the contact page</h1>");
});

app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});

//declare our settings
const endPointURL = "http://localhost:3000/vegetables";
const dinoEndPointURL = "http://localhost:3000/dinosaurs";
const result = document.getElementById("result");
const dinoResult = document.getElementById("dino-result");

let showData = (vegetable) => {
  vegetable.forEach((item) => {
    result.innerHTML += `
    <div>
      <h2>${item.name}</h2>
      <p>${item.colour}</p>
    </div>
  `;
  });
};

let showDino = (dinosaur) => {
  dinosaur.forEach((item) => {
    dinoResult.innerHTML += `
    <div class="dino-cards">
      <h2>${item.name}</h2>
      <p>Period: ${item.era}<p>
      <img src="${item.imageURL}" width="300px">
    </div>
    `;
  });
};

$.ajax({
  type: "GET",
  url: endPointURL,
  success: function (data) {
    console.log(data);
    showData(data);
  },
  error: function (error) {
    console.log(error);
    console.log("theres been an error");
  },
});

$.ajax({
  type: "GET",
  url: dinoEndPointURL,
  success: function (data) {
    console.log(data);
    console.log("hello dinos");
    showDino(data);
  },
  error: function (error) {
    console.log(error);
    console.log("theres been an error");
  },
});

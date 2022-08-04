//declare our settings
const endPointURL = "http://localhost:3000/vegetables";

$.ajax({
  type: "GET",
  url: endPointURL,
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    console.log(error);
    console.log("theres been an error");
  },
});

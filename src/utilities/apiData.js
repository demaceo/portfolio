// import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://bing-image-search1.p.rapidapi.com/images/trending",
//   headers: {
//     "x-rapidapi-key": "9368e7631emshe32a29ba22159a5p1b038bjsnaa6c3f5cc417",
//     "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export function bingRequest(searchInput) {
  fetch("https://bing-image-search1.p.rapidapi.com/images/trending", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9368e7631emshe32a29ba22159a5p1b038bjsnaa6c3f5cc417",
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

const generateRandomGif = () => {
fetch("https://api.giphy.com/v1/gifs/random?api_key=XyR8yGvxwUSqyTwCklJivCX8VMxOaVBu&tag=&rating=r")
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default generateRandomGif;

// //  ****** lets you create custom pre-configured fetch api call! ******
// const getUser = axios.create({
//   baseURL: "https://randomuser.me/api/", // we define url
//   timeout: 1000, // (optional) set timeout
//   headers: { "X-Custom-Header": "foobar" }, // pass headers
// });

// // ****** use later like this ******
// getUser().then((response) => console.log(response));

// axios
//   .post("/user", {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   // ****** Make a request for a user with a given ID ******
//   axios
//     .get("/user?ID=12345")
//     .then(function (response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });

//   // ****** Optionally the request above could also be done as ******
//   axios
//     .get("/user", {
//       params: {
//         ID: 12345,
//       },
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });

//   // ****** Want to use async/await? Add the `async` keyword to your outer function/method. ******
//   async function getUser() {
//     try {
//       const response = await axios.get("/user?ID=12345");
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

// axios
//   .post("/user", { firstName: "Fred", lastName: "Flintstone" })
//   .then((response) => {})
//   .catch((error) => {});

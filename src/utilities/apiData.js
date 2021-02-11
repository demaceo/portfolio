import Axios from 'axios';

// lets you create custom pre-configured fetch api call!
const getUser = axios.create({
  baseURL: "https://randomuser.me/api/", // we define url
  timeout: 1000, // (optional) set timeout
  headers: { "X-Custom-Header": "foobar" }, // pass headers
});

// use later like this
getUser().then((response) => console.log(response));


axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // Make a request for a user with a given ID
  axios
    .get("/user?ID=12345")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  // Optionally the request above could also be done as
  axios
    .get("/user", {
      params: {
        ID: 12345,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  // Want to use async/await? Add the `async` keyword to your outer function/method.
  async function getUser() {
    try {
      const response = await axios.get("/user?ID=12345");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }



axios.post('/user', {    firstName: 'Fred',    lastName: 'Flintstone'  })
  .then( response => {  })
  .catch( error => {  });
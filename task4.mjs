import fetch from "node-fetch";
// posts = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("error nih");
//     console.log(err);
//   }
// };
// posts();
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
fetch("https://jsonplaceholder.typicode.com/users")
  .then((x) => x.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.name);
    });
  });

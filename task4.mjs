import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
  .then((x) => x.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.name);
    });
  });

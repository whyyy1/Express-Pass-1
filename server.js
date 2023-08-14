const express = require("express");

const app = express();
const port = 3000;
const count = 99;

app.get("/", (req, res) => {
  res.send(`
    <h1>${count} Bottles of beer on the wall</h1>
    <a href="http://localhost:${port}/${
    count - 1
  }">take one down, pass it around</a>
    <br>
    <p>Pass it around</p>
    <br>
    <p>${count - 1} bottles of beer on the wall!</p>
  `);
});

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 0) {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <a href="http://localhost:${port}">Start over</a>
    `);
  } else {
    res.send(`
      <h1>${id} Bottles of beer on the wall</h1>
      <a href="http://localhost:${port}/${
      id - 1
    }">take one down, pass it around</a>
      <br>
      <br>
    <p>Pass it around</p>
    <br>
    <p>${id - 1} bottles of beer on the wall!</p>
    `);
  }
});


//===============================================================

// app.get("/", (req, res) => {
//   res.send(
//     `<h1>${count} Bottles of beer on the wall</h1> <a href=http://localhost:${port}/${
//       count - 1
//     }>take one down, pass it around</a>`
//   );
// });

// app.get("/:id", (req, res) => {
//   if (!req.params.id === 0) {
//     res.send(
//       `<h1>${
//         req.params.id
//       } Bottles of beer on the wall</h1><a href=http://localhost:${port}/${
//         req.params.id - 1
//       }>take one down, pass it around</a>`
//     );
//   } else {
//     res.send(
//       `<h1>${
//         req.params.id
//       } Bottles of beer on the wall</h1><a href=http://localhost:${port}/${
//         req.params.id - 1
//       }>take one down, pass it around</a>`
//     );
//   }
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

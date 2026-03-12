const fs = require("fs");
const http = require("http");
const url = require("url");

///////////////
//files

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn);
// const textOut = `This is what we know about the avogado: ${textIn}\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/input.txt', textOut)
// console.log('File written!');

//Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./txt/append.txt",
//         `${data2}\n${data3}`,
//         "utf-8",
//         (err) => { console.log("File has been written ");},
//       );
//     });
//   });
//   console.log(data1);
// });

// console.log("Will read file");

////////////////////////////////////////
// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const objectData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview") {
    res.end("THis is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is an incredible product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
    // res.end("API");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("Page Not Found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

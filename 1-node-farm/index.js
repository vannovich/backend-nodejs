const fs = require("fs");

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn);
// const textOut = `This is what we know about the avogado: ${textIn}\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/input.txt', textOut)
// console.log('File written!');

//Non-blocking, asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile(
        "./txt/append.txt",
        `${data2}\n${data3}`,
        "utf-8",
        (err) => { console.log("File has been written ");},
      );
    });
  });
  console.log(data1);
});

console.log("Will read file");

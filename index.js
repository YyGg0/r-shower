let QRCode = require("qrcode");
QRCode.toString("hello", { type: "terminal" }, (err, data) => {
  console.log(data);
});

// const QRCode = require('qrcode');
// console.log(1);
// ​QRCode.toString('hello', { type: 'terminal' },
// function (err, data) {
//     console.log(data);});
// // console.log(1);

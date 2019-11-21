const createQrCode = () => {
  var userInput = document.getElementById("valor").value;
  var qrcode = new QRCode("qrcode", {
    text: userInput,
    width: 256,
    height: 256,
    colorDark: "black",
    colorLight: "white",
    correctLevel: QRCode.CorrectLevel.H
  });
};

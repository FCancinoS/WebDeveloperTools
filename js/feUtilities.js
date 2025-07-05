/***************************************** QR Code Generator ******************************************/
document.addEventListener("DOMContentLoaded", function() {
   this.getElementById("qrcode").classList.add("small-qrcode-container");
});


var qrcode = new QRCode("qrcode");

function makeCode () {    

  /*Ajusta el alto del div que contendra el qr*/
  document.getElementById("qrcode").classList.remove("small-qrcode-container");
  document.getElementById("qrcode").classList.add("large-qrcode-container");
  var elText = document.getElementById("text");
  
  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }

  document.getElementById("qrcode").innerHTML = ""; // Limpia el QR anterior
  qrcode = new QRCode("qrcode", {
    text: elText.value,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H
  });
  /*Imagen se descarga automaticamente*/
  setTimeout(() => {
    const qrImg = document.querySelector("#qrcode img");
    if (qrImg) {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = qrImg.src;
      link.click();
    } else {
      alert("QR image not found.");
    }
  }, 500); // Da tiempo a que se genere la imagen
}
/*Se acciona el boton */
document.getElementById("qrBtn").addEventListener("click", function () {
  makeCode();
});

/***************************************** Sweats alerts generator  ******************************************/






/************************************** OCR Ticket Scan with tesseract     *********************************/

  document.getElementById("imageInput").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const { createWorker } = Tesseract;
    const worker = await createWorker("spa", 1); // español

    const result = await worker.recognize(file);
    console.log(result.data); // JSON completo
    document.getElementById("output").textContent = JSON.stringify(result.data, null, 2);

    await worker.terminate();
      });
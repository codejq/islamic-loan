window.onload = function () {
  /*var canvas = document.getElementById("myCanvas");
     var context = canvas.getContext("2d");
     var imageObj = new Image();
     imageObj.onload = function(){
         context.drawImage(imageObj, 0, 0);
         //context.font = "25pt Calibri ";
         //context.fillText("السلام عليكم ورحمة الله وبركاته ", 800, 60);
     };
     imageObj.src = "./img2.jpg";*/
  //document.getElementById("originalImage").src=logoPath;
  const elemets = document.querySelectorAll(".form-check-input");
  elemets.forEach((el) =>
    el.addEventListener("click", (event) => {
      getImgs();
    })
  );
};

function Download() {
  var link = document.createElement("a");
  link.download = "filename.png";
  link.href = document.getElementById("myCanvas").toDataURL("image/png");
  link.click();
}

function DownloadImage() {
  //   var canvas = document.getElementById("myCanvas");
  //   var data = canvas.toDataURL("image/png");
  //   var link = document.createElement("a");
  //   link.download = "filename.png";
  //   link.href = data.replace("image/png", "image/octet-stream");
  //   link.click();

  //   const readChild = document.querySelector("#photoResult");

  //   canvasChildren.forEach((img) => {
  //      var canvas = document.getElementById("myCanvas");
  //     var data = img.toDataURL("image/png");
  //     var link = document.createElement("a");
  //     link.download = "filename.png";
  //     link.href = data.replace("image/png", "image/octet-stream");
  //     link.click();
  //   });

  const readChild = document.querySelector("#photoResult");
  const canvasChildren = readChild.getElementsByTagName("canvas");

  var srcList = [...canvasChildren];
//   console.log(srcList[2]);
    srcList.forEach((img) => {
      var data = img.toDataURL("image/png");
          var link = document.createElement("a");
          link.download = "filename.png";
          link.href = data.replace("image/png", "image/octet-stream");
          link.click();
    })
}

function ChangeOrginalImage() {
  getImgs();
  return;
  var dataUrl = "";
  var input = document.getElementById("UploadImageInput");
  var fReader = new FileReader();
  fReader.readAsDataURL(input.files[0]);
  fReader.onloadend = function (event) {
    var img = document.getElementById("originalImage");
    img.src = event.target.result;
  };
}

function UploadImage() {
  /*
	 var text = document.getElementById("usertext").value;
     var canvas = document.getElementById("myCanvas");
     var context = canvas.getContext("2d");
     var imageObj = new Image();
     imageObj.onload = function(){
         context.drawImage(imageObj, 0, 0);
         context.font = "25pt Calibri ";
		 context.fillStyle = document.getElementById("UploadImageInput").value;
		 context.strokeStyle = document.getElementById("UploadImageInput").value;
		 console.log(document.getElementById("UploadImageInput").value);
		 context.textAlign = "center";
		 var textArray = text.split("\n");
		 for(var i = 0 ; i < textArray.length ; i++){ 
			context.strokeText(textArray[i], 50+ canvas.width/2, 430 + (i * 60) );
			context.fillText(textArray[i], 50 +canvas.width/2, 429 + (i * 60) );
			
		 }
     };
     imageObj.src = "./img2.jpg";*/
  DrowImageToCanvas(document.getElementById("originalImage").src);
}
// create array of images
function ArrayImages() {
  var fileInput = document.getElementById("UploadImageInput");
  var fileList = [];
  ImgContainer = document.getElementById("arrayofphoto");

  fileInput.addEventListener("change", function (event) {
    fileList = [];
    for (var i = 0; i < fileInput.files.length; i++) {
      var fReader = new FileReader();
      fReader.readAsDataURL(fileInput.files[i]);
      fReader.onloadend = function (event) {
        fileList.push(event.target.result);
        ImgContainer.innerHTML += `<img id="${Math.random()}" class="singleImg" onload="${getImgs()}" src="${
          event.target.result
        }"/>`;
        return ImgContainer;
      };
    }
    let Images = document.querySelectorAll(".singleImg");
    Images.onload;
    console.log(Images);
    // $(".arrayofphoto").find("img");
  });
}
ArrayImages();

function getImgs() {
  const readChild = document.querySelector("#arrayofphoto");

  const children = readChild.childNodes;

  children.forEach((img) => {
    //    console.log(img);
    var imgq = document.getElementById("originalImage");
    //    console.log(imgq)
    DrowImageToCanvas(img);
  });
}

function DrowImageToCanvas(img) {
  const logoPath = document.querySelector(
    'input[name="logoColor"]:checked'
  ).value;
  var dataUrl = img.src;
  var canvas;
  var canvasId = "canvas" + img.id;
  // var img = document.getElementById("originalImage");
  //   var canvas = document.getElementById("myCanvas");
  if (document.getElementById(canvasId)) {
    canvas = document.getElementById(canvasId);
  } else {
    canvas = document.createElement("canvas");
    canvas.id = canvasId;
  }
  document.getElementById("photoResult").appendChild(canvas);
  canvas.width = img.naturalWidth;
  console.log(img.naturalWidth);
  canvas.height = img.naturalHeight;
  let logoSize = document
    .querySelector('input[name="logoSize"]:checked')
    .value.split("x");
  var context = canvas.getContext("2d");
  var imageObj = new Image();
  var myImage = new Image(logoSize[0], logoSize[1]);
  var logoX = 0;
  var logoY = 0;
  switch (document.querySelector('input[name="logoPos"]:checked').value) {
    case "1":
      logoX = 30;
      logoY = 20;
      break;
    case "2":
      logoX = canvas.width - logoSize[0] - 30;
      logoY = 20;
      break;
    case "3":
      logoX = 30;
      logoY = canvas.height - logoSize[1] - 20;
      break;
    case "4":
      logoX = canvas.width - logoSize[0] - 30;
      logoY = canvas.height - logoSize[1] - 20;
  }
  console.log(logoY);
  myImage.src = logoPath;
  imageObj.onload = function () {
    context.drawImage(imageObj, 0, 0);
    context.drawImage(myImage, logoX, logoY, logoSize[0], logoSize[1]);
    //context.font = "25pt Calibri ";
    //context.fillText("السلام عليكم ورحمة الله وبركاته ", 800, 60);
    console.log("logoSize" + logoSize[0]);
  };

  //imageObj.src = document.getElementById("originalImage").src;
  imageObj.setAttribute("src", dataUrl);

  //imageObj.src = "./img2.jpg";
}

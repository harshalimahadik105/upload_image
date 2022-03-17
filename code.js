function validateFileType(){
    var upFile = document.getElementById("upFile").value;
    var fileName = document.getElementById("fileName");
    //alert("You selected " + upFile.split("\\").pop())
    fileName.innerHTML="Uploaded";
    prev_img.src = URL.createObjectURL(event.target.files[0]);

    if (upFile=="jpg"){
        //TO DO
    }else{
        alert("Only jpg/jpeg and png files are allowed!");
        throw err;
    }
  
}
  
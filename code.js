// function validateFileType(){
//     var upFile = document.getElementById("upFile").value;
//     var fileName = document.getElementById("fileName");
//     //alert("You selected " + upFile.split("\\").pop())
//     fileName.innerHTML="Uploaded";
//     prev_img.src = URL.createObjectURL(event.target.files[0]);
// }

function validateFileType()
    {
        var typ=document.getElementById("upFile").value;
        var res = typ.match(".jpg");

        if(res)
        {
            // alert("sucess");
            fileName.innerHTML="Uploaded";
            prev_img.src = URL.createObjectURL(event.target.files[0]);
        }
        else
        {
            alert("Sorry only jpg images are accepted");
            document.getElementById("upFile").value
        }
    }
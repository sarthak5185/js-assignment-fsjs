const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgele = document.getElementById("img");
let inpbtn = document.getElementById("input");
let subbtn = document.getElementById("submit");

subbtn.addEventListener("click", function () {
  let string=inpbtn.value;
  if(string) 
  {
    imgele.src = url + string;
    imgele.style.display = "block";
  }
  else
  {
    alert("Invalid input kindly enter again");
  } 
});
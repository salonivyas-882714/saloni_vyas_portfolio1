function test(){
  var nam=document.getElementById("nam").value;
  var email=document.getElementById("email").value;
  var phone=document.getElementById("phone").value;
  var esub=document.getElementById("esub").value;
  var mess=document.getElementById("mess").value;

  document.getElementById("snam").innerHTML=""
    document.getElementById("semail").innerHTML=""

      document.getElementById("sphone").innerHTML=""
        document.getElementById("sesub").innerHTML=""
          document.getElementById("smess").innerHTML=""
if(nam.length==0){
  document.getElementById("snam").innerHTML="name must required"
}
let atpos=email.indexOf("@")
let dotpos=email.lastIndexOf(".")
if(email.length==0){
  document.getElementById("semail").innerHTML="please enter email"
}
else if(atpos==-1||dotpos==-1||atpos<1||dotpos<atpos+2||dotpos+2>=email.length){
  document.getElementById("semail").innerHTML="invalid email"
}
if(phone.length==0){
document.getElementById("sphone").innerHTML="please enter phone number"
}
else if(isNaN(phone)||phone.length!=10){
document.getElementById("sphone").innerHTML="invalid phone number"
}

if(esub.length==0){
  document.getElementById("sesub").innerHTML="subject is required"
}
if(mess.length<20){
  document.getElementById("smess").innerHTML="message must be at least 20 character"
}
if (
  nam.length > 0 &&
  email.length > 0 &&
  phone.length == 10 && !isNaN(phone) &&
  esub.length > 0 &&
  mess.length >= 20 &&
  atpos != -1 && dotpos != -1 && atpos >= 1 && dotpos >= atpos + 2 && dotpos + 2 < email.length
) 
{
  alert("Form submitted successfully");
}
}
function test(){
  document.getElementById("")
}
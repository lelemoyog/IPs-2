function calculate(){

var dd= document.getElementById("id-1").value;
var mm= document.getElementById("id-2").value;
var cc= document.getElementById("id-3").value;
var yy= document.getElementById("id-4").value;
var gender= prompt("what is your gender?").value;
var maleAkanaNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "kofi", "Kwame"]
var femaleAkanaNames=["akosua", "Adwoa", "Abenaa", "akua", "yaa", "afua", "ama"]

if (cc >=19 && cc<=20 ){

let yourDayOfWeek = Math.round((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7)

//console.log(yourDayOfWeek)
if(yourDayOfWeek == 1){

if (gender == "male"){

     alert("your akana name is" +maleAkanaNames[0]);

}
else if(gender == "female"){
         
      alert("your akana name is" +femaleAkanaNames[0]);
}
else{
         alert("No Kwasi Name for you");
    }



}

else if(yourDayOfWeek == 2){

if (gender == "male"){

     alert("your akana name is" +maleAkanaNames[1]);

}
else if(gender == "female"){
         
      alert("your akana name is" +femaleAkanaNames[1]);
}
else{
         alert("No Kwasi Name for you");
    }



}

else if(yourDayOfWeek == 3){

if (gender == "male"){

     alert("your akana name is" +maleAkanaNames[2]);

}
else if(gender == "female"){
         
      alert("your akana name is" +femaleAkanaNames[2]);
}
else{
         alert("No Kwasi Name for you");
    }



}

else if(yourDayOfWeek == 4){

if (gender == "male"){

     alert("your akana name is" +maleAkanaNames[3]);

}
else if(gender == "female"){
         
      alert("your akana name is" +femaleAkanaNames[3]);
}
else{
         alert("No Kwasi Name for you");
    }



}

else if(yourDayOfWeek == 5){

if (gender == "male"){

     alert("your akana name is" +maleAkanaNames[4]);

}
else if(gender == "female"){
         
      alert("your akana name is" +femaleAkanaNames[4]);
}
else{
         alert("No Kwasi Name for you");
    }



}

else if(yourDayOfWeek == 6){

if (gender == "male"){

     alert("your akana name is" +maleAkanaNames[5]);

}
else if(gender == "female"){
         
      alert("your akana name is" +femaleAkanaNames[5]);
}
else{
         alert("No Kwasi Name for you");
    }



}

else if(yourDayOfWeek == 7){

if (gender == "male"){

     alert("your akana name is" +maleAkanaNames[6]);

}
else if(gender == "female"){
         
      alert("your akana name is" +femaleAkanaNames[6]);
}
else{
         alert("No Kwasi Name for you");
    }



}

else{
    alert("input a valid century")
  }


}


}
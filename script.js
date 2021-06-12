var cc = parseInt(document.getElementById("id-3"));
var yy = parseInt(document.getElementById("id-4"));
var mm = parseInt(document.getElementById("id-2"));
var dd = parseInt(document.getElementById("id-1"));
var gender = document.getElementById("id-5");

var maleAkanaNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "kofi", "Kwame"]

var femaleAkanaNames = ["akosua", "Adwoa", "Abenaa", "akua", "yaa", "afua", "ama"]

function calculate() {
    console.log("your akan name is")
    if (gender == "male") {

        let yourDayOfWeek = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7
        let dOw = document.getElementById("akan")
        dOw.document.getElementById("akan").innerHTML="yourDayOfWeek"
        console.log("your day of week" + yourDayOfWeek)
    }
    else{
        console.log ("you are female")
    }
    // console.log("you proceed")


}

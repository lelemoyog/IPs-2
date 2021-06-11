var cc = parseInt(document.getElementById("id-3"));
var yy = parseInt(document.getElementById("id-4"));
var mm = parseInt(document.getElementById("id-2"));
var dd = parseInt(document.getElementById("id-1"));
var gender = toLowercase(document.getElementById("id-5"));

var maleAkanaNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "kofi", "Kwame"]

var femaleAkanaNames = ["akosua", "Adwoa", "Abenaa", "akua", "yaa", "afua", "ama"]

function calculate() {
    if (gender == male) {
        let yourDayOfWeek = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7
        let element = document.getElementById("akan")
        
        if (yourDayOfWeek === 6) {
            element.innerHTML ="your akana name is" + maleAkanaNames[5]

        }
    }
    // console.log("you proceed")


}
calculate()
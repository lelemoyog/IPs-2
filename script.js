var dd= document.getElementById("id-1").value;
var mm= document.getElementById("id-2").value;
var cc= document.getElementById("id-3").value;
var yy= document.getElementById("id-4").value;
var cc= document.getElementById("id-5").value;

const form = document.querySelector('form');
const data = new FormData(form);


function submit(){
    e.preventDefault();
    console.log(data)
}

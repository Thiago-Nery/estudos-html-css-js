
function teste(){
texto = document.getElementById("formtextA").value;
const novoli = document.createElement("li");
novoli.innerHTML = texto; 
document.getElementById("ul").appendChild(novoli);
}
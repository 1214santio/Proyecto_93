var firebaseConfig = {
  apiKey: "AIzaSyBbUn3Ee73_8vxnYwwJDLAnlnRh32rtpf0",
  authDomain: "proyecto-93-6869c.firebaseapp.com",
  projectId: "proyecto-93-6869c",
  databaseURL: "https://proyecto-93-6869c-default-rtdb.firebaseio.com/",
  storageBucket: "proyecto-93-6869c.appspot.com",
  messagingSenderId: "1022759128628",
  appId: "1:1022759128628:web:7cf48ee6786c059e180461"
};
firebase.initializeApp(firebaseConfig);
function SalirDeLaSesion()
{
  window.location = "index.html";
}
var Nombre = localStorage.getItem("Nombre");
document.getElementById("MostrarNombre").innerHTML = "Hola, " + Nombre;
function GuardarNombreDeLaSala()
{
  var NombreDeLaSala = document.getElementById("NombreDeLaSala").value;
  localStorage.setItem("NombreDeLaSala", NombreDeLaSala);
  firebase.database().ref("/").child(NombreDeLaSala).update({
    Nombre: "El nombre de la sala es el que pusiste"
  })
}
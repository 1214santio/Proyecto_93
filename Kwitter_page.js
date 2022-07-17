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
var user_name = localStorage.getItem("Nombre");
var room_name = localStorage.getItem("NombreDeLaSala");
exitroom()
{
    window.location = "Kwitter_room.html";
}
send()
{
    var message = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("message").innerHTML = ""
}
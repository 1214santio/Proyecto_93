function addUser()
{
    Nombre = document.getElementById("user_name").value;
    localStorage.setItem("Nombre", Nombre);
    window.location = "Kwitter_room.html";
}
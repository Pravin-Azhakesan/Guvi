var options =["X","O"]

var selectedoption = 0;

var currentplayer = options[selectedoption];

function HandleClick(id)
{
var currentbox = document.getElementById("b" + id).innerText;
if (currentbox == "")
{
    currentplayer = options[(selectedoption++) % 2];
    document.getElementById("b"+ id).innerText =  currentplayer;
}

}
const displayhome = document.getElementById("home");
const displayprojects = document.getElementById("projects");
const displayresume = document.getElementById("resume");

displayhome.style.display='block';
displayprojects.style.display='none';
displayresume.style.display='none';

function home(){
    displayhome.style.display='block';
    displayprojects.style.display='none';
    displayresume.style.display='none';
}

function projects(){
    displayhome.style.display='none';
    displayprojects.style.display='block';
    displayresume.style.display='none';
}

function resume(){
    displayhome.style.display='none';
    displayprojects.style.display='none';
    displayresume.style.display='block';
}


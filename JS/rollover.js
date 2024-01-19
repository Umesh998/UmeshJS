function enterfirstname() {
    document.getElementById("forenter").value = 'First name';
}

function mouseOut() {
    document.getElementById("forenter").value = 'Guardianname';
}

function entermiddlename() {
    document.getElementById("forblur").value = 'Middle name';
}

function mouseLeave() {
    document.getElementById("forblur").value = 'Parentname';
}

function enterlastname() {
    document.getElementById("forover").value = 'Last name';
}

function enterheight() {
    document.getElementById("forkeydown").value = 'Height';
}

function enterweight() {
    document.getElementById("forkeyup").value = 'Weight';
}

function entersex() {
    document.getElementById("forpress").value = 'Sex';
}

function enternickname() {
    document.getElementById("forfocus").value = 'Nickname';
}



function oneclass() {
    document.getElementById('firstbutton').className = 'loops';
}


function multipleclass() {
    document.getElementById('secondbutton').classList.add('buttonHover', 'btn');
    // document.getElementById('secondbutton').classList.remove('buttonhtml');
}


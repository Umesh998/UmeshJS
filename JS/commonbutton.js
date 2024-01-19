function forbutton(x) {

    let label = document.createElement('label');
    label.innerText = x + '\n';
    document.body.appendChild(label);

}

let myArray = [];

function push(storevalue) {

   myArray.push(storevalue);

  
   forbutton('clicked time :' + myArray.length);
   

   forbutton(myArray);
}


function pop() {

  myArray.pop();
  forbutton(myArray);

}

function main(anyone){
     let storevalue = document.getElementById('textid').value;

if (anyone == 'insert') {
    push(storevalue);
}
    else if (anyone == 'remove'){
        pop();
    }

    else {
        forbutton('not wroking');
    }
}

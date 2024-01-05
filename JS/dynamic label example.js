//dyanmic label syntax

function born(ride) {
    let label = document.createElement('label');
    label.innerText = ride + '\n';
    document.body.appendChild(label);
}


// for of example with te value storing in dynamic label made in js
function wales() {
    let animals = ["Tiger", "Rhino", "Lion", "Bear", "Cheetah"];
    for (let ride of animals) {
        born(ride);
    }

}

// for printing the key of array in console - (0 1 2 3 4)

// function mobile(){
//     let bikes = ["ducati", "hayabusa", "honda", "suzuki", "bmw"];
//     for (let x=0; x < bikes.length; x++){
// console.log(bikes[x]);
//     }

// }


//for the values in the array - here the array is bikes so we get the values of bikes in the output

// function mobile(){
//     let bikes = ["ducati", "hayabusa", "honda", "suzuki", "bmw"];
//     for (let ride=0; ride < bikes.length; ride++){
//         born(bikes[ride]);
//     }

// }


// for printing the keys on array in label - using dybnamic label (0 1 2 3 4 )

function mobile() {
    let bikes = ["ducati", "hayabusa", "honda", "suzuki", "bmw"];
    for (let ride = 0; ride < bikes.length; ride++) {
        born(ride);
    }

}
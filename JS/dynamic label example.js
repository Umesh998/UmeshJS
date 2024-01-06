//dyanmic label syntax

function lable(ride) {
    let label = document.createElement('label');
    label.innerText = ride + '\n';
    document.body.appendChild(label);
}


// for of example with the value storing in dynamic label made in js

function wales() {
    let animals = ["Tiger", "Rhino", "Lion", "Bear", "Cheetah"];
    for (let ride of animals) {
        born(ride);
    }

}

// for printing the key of array in console - (0 1 2 3 4)

function mobile() {
    let bikes = ["ducati", "hayabusa", "honda", "suzuki", "bmw"]; // array type
    for (let x = 0; x < bikes.length; x++) { //bikes.length = 5 
        console.log(bikes[x]);
    }
}

// for (let x = 0; 0 < 5; x++) { //bikes.length = 5 
//     console.log(bikes[x]); // x=0; bikes[0] = ducati
// }

// x = 1
// for (let x = 0; 1 < 5; x++) { //bikes.length = 5 
//     console.log(bikes[1]); // x=1; bikes[1] = hayabusa
// }

// x = 2
// for (let x = 0; 2 < 5; x++) { //bikes.length = 5 
//     console.log(bikes[2]); // x=2; bikes[2] = honda
// }

// x = 3
// for (let x = 0; 3 < 5; x++) { //bikes.length = 5 
//     console.log(bikes[3]); // x=3; bikes[3] = suzuki
// }

// x = 4
// for (let x = 0; 4 < 5; x++) { //bikes.length = 5 
//     console.log(bikes[4]); // x=4; bikes[4] = bmw
// }

// x = 5
// for (let x = 0; 5 < 5; x++) { //bikes.length = 5 //false
//     console.log(bikes[4]); // x=4; bikes[4] = bmw
// }



//for the values in the array - here the array is bikes so we get the values of bikes in the output

// function mobile(){
//     let bikes = ["ducati", "hayabusa", "honda", "suzuki", "bmw"];
//     for (let ride=0; ride < bikes.length; ride++){
//         born(bikes[ride]);
//     }

// }


// for printing the keys on array in label - using dynamic label (0 1 2 3 4 )

function forloopBike() {
    let bikes = ["ducati", "hayabusa", "honda", "suzuki", "bmw"];
    for (let ride = 0; ride < bikes.length; ride++) {
        createLable(ride);

        // let variable = bikes[ride];
    }
}

// Category: Stored in table in Database
//     Mobile
//     Laptop
//     Clothes
//     Grocerries

// Databse give me 5 records ;
    // Store Array

// let arrayValue = array[2]; output = Clothes


// for of example with the array of cars having dynamic label

function porsche() {
    let porsche = [911, "Cayenne", "Gt3rs", "panemera", 890];
    for (let ride of porsche) {
        born(ride);
    }
}
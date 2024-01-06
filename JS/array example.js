//dynamic lable 

function lable(ride) {
    let label = document.createElement('label');
    label.innerText = ride + '\n';
    document.body.appendChild(label);
}


// array 1 example of push with for in
function forcarspush() {
    let cars = ["Ferarri", "Porsche", "Bentley", "Bugatti", "Ford", "Koenigsegg"];

    cars.push("Mercedes", "BMW");
    for (let ride of cars) {
        lable(ride);
    }

}

// array 1 example of pop with for in 
function forcarspop() {
    let cars = ["Ferarri", "Porsche", "Bentley", "Bugatti", "Ford", "Koenigsegg", "Mercedes", "BMW"];

    cars.pop("BMW");
    for (let ride of cars) {
        lable(ride);
    }

}

//array 2 example of push wih for of
function forbikespush() {
    let bikes = ["Suzuki", "BMW", "Ducati", "Royalenfield", "Hero"];

    bikes.push("Bajaj", "Jawa");
    for (let ride of bikes) {
        lable(ride);
    }

}

//array 2 example of pop with for of
function forbikespop() {
    let bikes = ["Suzuki", "BMW", "Ducati", "Royalenfield", "Hero", "Bajaj", "Jawa"];

    bikes.pop("Jawa");
    for (let ride of bikes) {
        lable(ride);
    }

}

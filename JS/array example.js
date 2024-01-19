

//dynamic lable 
function lable(ride) {
    let label = document.createElement('label');
    label.innerText = ride + '\n' ;
    document.body.appendChild(label);
}


// array 1 example of push with for of 
function forcarspush() {
    let cars = ["Ferarri", "Porsche", "Bentley", "Bugatti", "Ford", "Koenigsegg"];

    cars.push("Mercedes", "BMW");

    for (let ride of cars) {
        lable(ride);
    }

}

// array 1 example of pop with for of 
function forcarspop() {
    let cars = ["Ferarri", "Porsche", "Bentley", "Bugatti", "Ford", "Koenigsegg", "Mercedes", "BMW"];

    cars.pop();

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

// array 1 example of sort with for of

function plantz() {
    let plants = ["Tulsi", "Mogra", 22, "Mint", "Aloevera", 12,  "012", "Jasmine"];
    plants.sort();
 for (let ride of plants){
    lable(ride);
 }
   
}


// array 1 example of reverse 

function plantze() {
    let plants = ["Tulsi", "Mogra", "Mint", "Aloevera", "Jasmine"];
    plants.reverse();

    for (let ride of plants) {
        lable(ride);
    }
}

// function plantze() {
//     let plants = ["Tulsi", "Mogra", "Mint", "Aloevera", "Jasmine"];
//     plants.reverse();

//     for (let ride in plants) {
//         lable(ride);
//     }
// }


//array 2 example of sort with for in 

function trees(){
    let treez = ["Banyan", "Neem", "Peepal", "Gulmohar", "Banana"];
    
    treez.sort();

    for(let x  in treez){
        lable(x);
    }
}

//array 2 example of reverse with for in 

function friuts(){
    let fruitsz = ["Banana", "Guava", "Grapes", "Jamun", "Orange"];

    fruitsz.reverse();

    for(let y in fruitsz){
        lable(y);
    }
    
}

function friutas(){
    let fruitsze = ["Banana", "Guava", "Grapes", "Jamun", "Orange"];

   let fruiiits = fruitsze.join(' and ');

    for(let y of fruiiits){
        lable(y);
    }
    




}

function splicee(){
    let mobile = ["Xiaomi", "Apple", "Samsung", "Redmi", "Moto"];

    mobile.splice(1 , 3);

    for(let e of mobile){
        lable(e);
    }
}






function slicee(){
    let mobil = ["Xiaomi", "Apple", "Samsung", "Redmi", "Moto"];

    mobil.slice(1 , 3);

    for(let e of mobil){
        lable(e);
    }
}




function update(){
    let updatevalues = ["Umesh", "Kunal", "Ravi", "Shavi", "Funal", "Kumesh"];

    updatevalues[2]  = "Ramesh";

    for(let d of updatevalues){
        lable(d);
    }
}

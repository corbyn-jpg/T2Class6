let numbers = [40, 100, 1];
let points = new Array(40, 100, 1);

console.log(numbers);
console.log(points);

//One item in an array
let good = [40];

//Creates spaces in the array
let bad = new Array(40);

console.log(good);
console.log(bad);

let dogs = ["golden retriever", "husky", "poodle", "corgi", "labrador", "bull dog"];

console.log(dogs);
console.log(dogs.length);
console.log(dogs[2]);
console.log(dogs[dogs.length - 1]);
console.log(Array.isArray(dogs));
console.log(dogs.toString());
console.log(dogs.join(" * "));

dogs.pop();
console.log(dogs);

dogs.push("bull dog");

let dog = dogs.pop();
console.log(dogs);
console.log(dog);

//First number you want to include and last number you want to exclude
let newDogs = dogs.slice(1, 4);
console.log(newDogs);
console.log(dogs);

dogs.splice(1, 2, "staffie", "jack russell", "pitbull");
console.log(dogs);

function decreasesMars(){
    if(document.getElementById('ticketsMars').value != 0){
        document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) - 1;
    }else{
        document.getElementById('ticketsMars').value = 0;
    }
}

function increasesMars(){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
}

let totalMarsCost = 0;
let totalSaturnCost = 0;
let totalCost = 0;

function total(){
    totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 50;
    totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 70;
    totalCost = totalMarsCost + totalSaturnCost;
    document.getElementById('total').innerHTML = "R " + totalCost;
}

function decreasesSaturn(){
    if(document.getElementById('ticketsSaturn').value != 0){
        document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) - 1;
    }else{
        document.getElementById('ticketsSaturn').value = 0;
    }
}

function increasesSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}

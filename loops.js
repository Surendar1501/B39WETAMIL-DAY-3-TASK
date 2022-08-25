// using for loop in array

let num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
 
// using for in loop in array
let animals = ["lion", "tiger", "dog", "cat", "cheetah"];
for(let keys in animals){
    console.log(keys)
}

// using for of in array

for (let keys for animals){
    console,log(keys);
}


const bike = {
    name: "yamaha",
    color: "blue",
    model: "r15",
    version: 3,
};
// using for in loop for Object

for(const key in bike) {
    console.log(`${key} => ${bike[key]}`);
}

// Object.keys method

for(const key of Object.keys(bike)) {
    console.log(`${key} => ${bike[key]}`);
}

//Object.values method

console.log(Object.values(bike));
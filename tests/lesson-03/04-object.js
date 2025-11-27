// bai 1
const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
};

console.log("Năm sản xuất xe: " + car.year);


// bai 2
const person = {
    "name": "Nhi",
    "address": {
        "street": "01 Giang Châu 1",
        "city": "Da Nang",
        "country": "Viet Nam"
    },
};

console.log("Street: " + person.address.street);


// bai 3
const student = {
    "name": "Pham Huu Duc",
    "grades": {
        "math": 10,
        "english": 9.5
    },
};

console.log("Math: " + student["grades"]["math"]);


// bai 4
const settings = {
    "volume": 25,
    "brightness": 80
};

settings.volume = 30;
console.log(settings);


// bai 5
const bike = {

};

bike.color = "Black";
console.log(bike);


// bai 6
const employee  = {
    "name": "Ngân",
    "age": 20
};

delete employee.age
console.log(employee);


// bai 7
const school  = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào", "Hương", "Giang"]
};

console.log(school);


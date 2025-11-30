//bai 1
function multiply(a, b) {
  console.log(`Kết quả của ${a} * ${b} =`, a * b);
}
const Data = [
  { a: 2, b: 5 },
  { a: 3, b: 4 }
];

for (let i = 0; i < Data.length; i++) {
  multiply(Data[i].a, Data[i].b);
};


//bai 2
function findMin(a, b, c) {
  return Math.min(a, b, c);
}
const Data1 = [
  { a: 50, b: 10, c: 100 },
  { a: 300, b: 30, c: 3 }
];

for (let i = 0; i < Data1.length; i++) {
  const { a, b, c } = Data1[i];
  const result = findMin(a, b, c);
  console.log(`Min (${a},${b},${c}) = ${result}`);
};

//bai 3
function getTopStudents(students, threshold) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      result.push(students[i].name);
    }
  }
  console.log(result);
}

const students = [
  { name: "Hung", score: 9.5 },
  { name: "Tu", score: 10 },
  { name: "Nhien", score: 8 },
  { name: "Hoang", score: 7 },
  { name: "Trung", score: 9 },
];
const threshold = 8;

getTopStudents(students, threshold);

//bai 4

function calculateInterest(principal, rate, years) {
  const total = principal + principal * rate * years / 100;
  console.log(`Tong so tien goc va lai với Principal = ${principal}, Rate = ${rate}, Years = ${years} la: ${total}`);
};

const dataTest = [
  { principal: 2000000, rate: 4, years: 5 },
  { principal: 20000000, rate: 5, years: 10 },
  { principal: 200000000, rate: 6, years: 10 },
];

for (let i = 0; i < dataTest.length; i++) {
  const { principal, rate, years } = dataTest[i];
  calculateInterest(principal, rate, years);
}

//bai 1 - Tinh tong tu 1 den 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tong tu 1 den 100 la: " + sum);

//bai 2 - In bang cuu chuong tu 2 den 9
for (let a = 2; a <= 9; a++) {
    console.log(`\n Bảng cửu chương ${a}`);
    for (let b = 1; b <= 10; b++) {
        console.log(`${a} * ${b} = ${a * b}`);
    }
}

//bai 3 - Tao 1 mang chưa cac so le tu 1 den 99
const arr = [];

for (let a = 1; a < 100; a++) {
    if (a % 2 === 1){
        arr.push(a);
    }
}

console.log(arr);

//bai 4 - In ra 10 email dựa trên tên người dùng và số thứ tự
const emails = [];

for (let a = 1; a <= 10; a++) {
    emails.push(`user${a}@example.com`);
}

console.log(emails);

//bai 5 
revenue = [
    {"month": 1, "total": 150},
    {"month": 2, "total": 100},
    {"month": 3, "total": 50},
    {"month": 4, "total": 80},
    {"month": 5, "total": 90},
    {"month": 6, "total": 120},
    {"month": 7, "total": 110},
    {"month": 8, "total": 170},
    {"month": 9, "total": 130},
    {"month": 10, "total": 100},
    {"month": 11, "total": 50},
    {"month": 12, "total": 50},
]
let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i].total;
}
console.log("Total Revenue: ", totalRevenue);
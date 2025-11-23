let a = "";
for (let i = 1000; i <= 2000; i++) {
    if (i % 3 === 0) {
        a += i + ", ";
    }
}
console.log("Các giá trị chia hết cho 3 từ 1000 đến 2000 là:", a);
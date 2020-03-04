const Shop = require("./domain/shop");

function main() {
    const shop = new Shop(2); // 직원이 2명인 버거가게
    console.log("버거가게 오픈!");
    console.log("직원 수:", shop.number_of_employee);
    shop.employ();
    shop.order(7);
}

main();

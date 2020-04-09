const Shop = require("./domain/shop");
const Employee = require("./domain/employee");

function main() {
    input = [3, "치즈버거", "치킨버거", "치즈버거", "햄버거", "치킨버거", "햄버거", "치즈버거", "치즈버거", "치킨버거"] // 햄2 치즈4 치킨3
    let employees, menus = [];
    [employees, menus] = processInput(...input);
    const shop = new Shop(employees, menus);
    console.log(shop);
    shop.teachEmployees();
    shop.order();
}

function processInput(number_of_employee, ...menus) {
    const employees = [];
    for (let i = 0; i < number_of_employee; i++) {
        employees.push(new Employee((i + 1)));
    }
    return [employees, menus];
}
main();
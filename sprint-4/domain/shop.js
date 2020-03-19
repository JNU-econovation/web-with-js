const Employee = require("./employee"); // 후에 지우기
//추가메뉴는 기존에 있었던 메뉴 조리시간보다 1초씩 더 걸린다고 가정
let seconds = 2;
class Shop {
  constructor(employees, menus) {
    this.employees = employees;
    this.number_of_employees = employees.length;
    this.burgers = { "햄버거": 2, "치즈버거": 3, "치킨버거": 4 };
    this.orderlist = menus;
  }

  teachEmployees() {
    let j = 1;
    for (let i = 0; i < this.number_of_employees; i++) {
      this.employees[i].burgers_in_charge.push("햄버거");
      if (i % 2 == 1) {
        this.employees[i].burgers_in_charge.push("치즈버거");
        continue;
      }
      this.employees[i].burgers_in_charge.push("치킨버거")
    }
    this.employees.forEach(employee => {
      console.log(`직원${employee.employee_id}은(는) ${employee.burgers_in_charge}를 만들 수 있습니다.`);
    });
  }

  order() {
    let number_of_each_menu = this.checkOrder(this.orderlist, this.initBurgerNumber(this.burgers));
    console.log(number_of_each_menu);
    this.distributeWork(this.employees, number_of_each_menu);
  }

  initBurgerNumber(burgers) {
    let map = new Map()
    Object.keys(burgers).forEach(burger => {
      map.set(burger, 0);
    })
    return map
  }

  checkOrder(menus, map) {
    menus.forEach(menu => {
      if (!map.has(menu))
        throw new Error("없는 메뉴를 주문하셨습니다!");
      map.set(menu, map.get(menu) + 1);
    })
    return map;
  }

  distributeWork(employees, number_of_each_menu) {
    let left_order = number_of_each_menu;
    const reversed_menu = Array.from(left_order.keys()).reverse(); // 오래 걸리는 버거부터 분배하기 위해 reverse
    let total_burger = Array.from(left_order.values()).reduce((acc, cur) => acc + cur);
    while (total_burger !== 0) {
      employees.forEach(async employee => {
        console.log("foreach실행")
        // if (total_burger === 0) return;

        let burger = this.checkEmployee(employee, left_order, reversed_menu);
        if (burger) {
          left_order.set(reversed_menu[burger], left_order.get(reversed_menu[burger]) - 1);
          total_burger--;
          console.log(total_burger);
          this.giveWork(employee, burger).then(cooked_burger => console.log("while의 forEach안의 if 안의 cooked_burger", cooked_burger));

        }

      });
    }
    console.log("분배 완료");
  }

  checkEmployee(employee, left_order, reversed_menu) {

    // console.log(`직원${employee.employee_id} 살펴보는 중`)

    for (let i = 0; i < reversed_menu.length; i++) {
      // console.log(`${reversed_menu[i]}살펴보는 중`)
      if (left_order.get(reversed_menu[i]) == 0) {
        console.log(`${reversed_menu[i]} 다 만들었음`);
        continue; // 다음 메뉴 살펴봄
      }
      if (employee.isWorking()) {
        // console.log(`직원${employee.employee_id} 일하고 있음`);
        return false;
      }
      if (employee.burgers_in_charge.find(burger => burger === reversed_menu[i])) {
        console.log("3번째 if문");
        return reversed_menu[i];
      }
    }
    console.log("아무것도 해당하지 않음");
    return false;
  }
  async giveWork(employee, burger) {
    console.log("giveWork", employee.employee_id, burger);
    const timeout = this.burgers[burger];
    const result = await employee.work(burger, timeout);
    console.log("giveWork의 result", result);
    const cooked_burger = (`Employee${employee.employee_id}: ${result}를 완성하였습니다.`);
    return cooked_burger;
  }
}

module.exports = Shop;
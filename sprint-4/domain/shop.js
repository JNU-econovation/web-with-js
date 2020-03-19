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
    this.employees.forEach(async employee => {
      console.log(`직원${employee.employee_id}은(는) ${employee.burgers_in_charge}를 만들 수 있습니다.`);
    });
  }

  order() {
    let number_of_each_menu = this.checkOrder(this.orderlist, this.initBurgerNumber(this.burgers));
    this.distributeWork(this.employees, number_of_each_menu);
  }

  initBurgerNumber(burgers) {
    let map = new Map()
    Object.keys(burgers).forEach(burger => {
      map.set(burger, 0);
    })
    return map;
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
    let total_burger = Array.from(left_order.values()).reduce((acc, cur) => acc + cur);

    employees.forEach(employee => {

      async function intoKitchen(shop) {
        let burger = shop.checkEmployee(employee, left_order);
        if (total_burger === 0) {
          return;
        }
        if (burger) {
          total_burger--;
          let cooked_burger = await shop.giveWork(employee, burger);
          console.log(cooked_burger);
          intoKitchen(shop);
        }
      }

      intoKitchen(this);
    });
  }

  checkEmployee(employee, left_order) {

    const reversed_menu = Array.from(left_order.keys()).reverse(); // 오래 걸리는 버거부터 분배하기 위해 reverse

    for (let i = 0; i < reversed_menu.length; i++) {
      if (left_order.get(reversed_menu[i]) === 0) {
        continue; // 다음 메뉴 살펴봄
      }
      if (employee.isWorking()) {
        return false;
      }
      if (employee.burgers_in_charge.find(burger => burger === reversed_menu[i])) {
        left_order.set(reversed_menu[i], left_order.get(reversed_menu[i]) - 1);
        return reversed_menu[i];
      }
    }
    return false;
  }
  async giveWork(employee, burger) {
    const timeout = this.burgers[burger];
    const result = await employee.work(burger, timeout);
    const cooked_burger = (`${timeout}초 Employee${employee.employee_id}: ${result}를 완성하였습니다.`);
    return cooked_burger;
  }
}

module.exports = Shop;
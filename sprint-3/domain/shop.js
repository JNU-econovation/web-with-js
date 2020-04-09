const Employee = require("./employee");

class Shop {
  constructor(number_of_employee) {
    this.number_of_employee = number_of_employee;
    this.employees = [];
    this.inspect = 0;
  }

  employ() { // 고용하기, employees 생성
    console.log("shop에서 employ중");
    let recruiting = 0;
    while (recruiting++ < this.number_of_employee) {
      this.employees.push(new Employee(recruiting));
    }
    this.employees.forEach(e => {
      console.log(e);
    });
    console.log("고용완료");
  }

  order(number_of_items) { // 주문 처리하기 
    let left_order = number_of_items;
    console.log(`들어온 주문: ${number_of_items}개`);

    let task = (left_order > this.number_of_employee ? this.number_of_employee : left_order);
    this.distributeTask(task);
    left_order -= task;

    let timer = setInterval(() => {
      if (left_order <= 0) {
        console.log("주문이 완료되었습니다");
        clearInterval(timer);
      }
      console.log("left_order:", left_order)
      task = (left_order > this.number_of_employee ? this.number_of_employee : left_order);
      console.log("task:", task);
      this.distributeTask(task)
      left_order -= task;
    }, 2000);
  }

  distributeTask(task) {
    for (let i = 0; i < task; i++)
      this.giveTask();
  }

  giveTask() {
    if (!this.employees[this.inspect].isWorking()) {
      this.employees[this.inspect].work();
    }

    this.inspect = (this.inspect + 1) % this.number_of_employee;
  }
}

module.exports = Shop;
class Employee {
    constructor(employee_id) {
        this.employee_id = employee_id;
        this.status = "rest";
        console.log("I employed!");
    }

    isWorking() {
        if (this.status == "working")
            return true;
        return false;
    }

    setStatus() { // 밖에서 임의의 status를 인자로 집어넣지 않게 하기 위해서 별도의 파라미터는 두지 않고 이렇게 전환만 하도록 했는데
        // 더 적절하거나 conventional한 방법이 있을까요?
        if (this.status === "rest") {
            this.status = "working";
            console.log(`Employee${this.employee_id}: rest => working`);
            return;
        }
        if (this.status === "working") {
            this.status = "rest"
            console.log(`Employee${this.employee_id}: working => rest`);
            return;
        }
    }

    work() {
        this.setStatus();
        setTimeout(() => {
            console.log(`Employee${this.employee_id}: 햄버거를 완성하였습니다.`);
            this.setStatus();
        }, 2000);
    }

}

module.exports = Employee;
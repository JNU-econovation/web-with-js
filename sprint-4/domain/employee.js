class Employee {
    constructor(employee_id) {
        this.employee_id = employee_id;
        this.status = "rest";
        this.burgers_in_charge = [];
    }

    isWorking() {
        if (this.status == "working")
            return true;
        return false;
    }

    setStatus() {
        if (this.status === "rest") {
            this.status = "working";
            // console.log(`Employee${this.employee_id}: rest => working`);
            return;
        }
        if (this.status === "working") {
            this.status = "rest"
            // console.log(`Employee${this.employee_id}: working => rest`);
            return;
        }
    }

    work(burger, timeout) {
        this.setStatus();

        return new Promise((res, rej) => {
            if (burger === undefined) {
                rej("버거 전달 안됨");
            }
            setTimeout(() => {
                this.setStatus();
                res(burger);
            }, timeout * 1000);
        });;
    }
}

module.exports = Employee;
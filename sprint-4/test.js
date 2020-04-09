function hello() {
    return new Promise((res, rej) => { setTimeout(() => res("hello"), 1000); });
}

async function bow() {
    const hellow = await hello();
    console.log(hellow);
}

function work(burger, timeout) {
    timeout = timeout * 1000;

    console.log("work 실행, burger:", burger, "timeout", timeout);

    return new Promise((res, rej) => {
        // console.log("promise실행");
        setTimeout(() => {
            // console.log(`Employee${ts.employee_id}: ${burger}를 완성하였습니다.`);
            console.log("setTimeout안의 burger", burger)
            res(burger);
        }, timeout);
    });;
}

async function giveWork(employee, burger) {
    timeout = 4;
    const result = await work(burger, timeout);
    console.log(result);
}

giveWork("foo", '치즈버거');

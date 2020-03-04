function syncf(str, timeout) {
    // const date = new Date();
    const start = Date.now();
    while (true) {
        let now = Date.now();
        // console.log("start:", start, "now:", now);
        if (now - start >= timeout) {
            // console.log("not yet");
            break;
        };
    }
    console.log(str);
}

function asyncf(str, timeout) {
    setTimeout(() => console.log(str), timeout);
}

syncf("first", 1000);
asyncf("second", 1000);
syncf("third", 0);
asyncf("fourth", 1000);

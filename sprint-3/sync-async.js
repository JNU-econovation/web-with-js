let syncTime = 0;
function syncf(input, time) {
    syncTime+=time;
    let interval = syncTime;
    setTimeout(function(){
        console.log(String(interval/1000) + " " + input);
    },interval);
}

function asyncf(input,time) {
    let asyncTime = syncTime + time;
    setTimeout(function(){
        console.log(String(asyncTime/1000) + " " + input);
    },asyncTime);
}

syncf("first", 1000);
asyncf("second", 1000);
syncf("third", 0);
asyncf("fourth", 1000);
syncf("fifth", 2000);
asyncf("sixth", 2000);

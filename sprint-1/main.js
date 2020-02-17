let TimeConverter = require("./domain/time-converter.js");
let Log = require("./util/log.js");
let Logger = new Log();

function main() {

    let TC = [];
    TC[1] = new TimeConverter("1600s m");
    TC[2] = new TimeConverter("1h35m s");
    TC[3] = new TimeConverter("3d h");
    TC[4] = new TimeConverter("3837s h");
    TC[5] = new TimeConverter("1400s");
    TC[6] = new TimeConverter("1700H m");

    TC.forEach(tc => {
        try {
            Logger.log(tc.convertTime());
        } catch (err) {
            Logger.log(err.message);
        }

        // 아래와 같은 형식으로 구현해보고 싶었으나 실패, 일단 err가 발생하면 그 다음 이터레이션으로 진행되지 않고, 
        // tc.convertTime()에서 return한 인자가 result에 들어갈 줄 알았는데 그렇지 않은 것 같음

        // tc.convertTime((err, result) => {
        //     if (err) Logger.log(err.message);
        //     else Logger.log(result);
        // })

    });
}

main();
const Commander = require("./domain/commander");
const Log = require("./util/log");
const array = require("./domain/array.js");

function main() {
    const inputs = ["count 1 2 3 4 5",
        "count 1 '하나' 2 '둘' 3 '셋' 4",
        "count one two three four five",
        "add 35 23",
        "add 100 five 10 셋",
        "add 10 20 30 40", "add",
        "set 1 2 3 4 5 1 4 3 2 6 5 1 7",
        "remove 1 3 5 6"];


    inputs.forEach(element => {
        const input = element.split(" ");
        const commander = new Commander(...input); // 그냥 input으로 사용하면 배열 통채로 전달되기 때문에 ...input

        commander.run((err, result) => {
            if (err) {
                Log.log(null, null, err);
            }
            else Log.log(commander.command, result);
        });
    })

    /*
    initial Value를 위한 테스트케이스
    commander.js를 통한 customReduce사용 플로우에서는 initialValue를 주는 로직이 들어있지 않지만, 
    그냥 array자체에서 customReduce를 사용할 때에는 initialValue를 줄 수도 있다는 가정하에 
    array.js에 initialValue에 대한 코드 처리를 간단하게 하였고, 여기서는 이를 위한 테스트를 할 예정입니다.
    */
    console.log("\ncustomReduce의 initialValue 테스트");
    const a1 = new array(1, 2, 3, 4);
    console.log("a1", a1);
    console.log("initlaValue가 undefind일때 result:", a1.customReduce((acc, crr) => { return acc + crr }));
    console.log("initlaValue가 있을때 result:", a1.customReduce((acc, crr) => { return acc + crr }, 123));
    console.log("initlaValue가 null일때 result:", a1.customReduce((acc, crr) => { return acc + crr }, null));
    console.log("initlaValue가 false일때 result:", a1.customReduce((acc, crr) => { return acc + crr }, false));
}
main();

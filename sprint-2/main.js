const Commander = require("./domain/commander");
const Log = require("./util/log");
const array = require("./domain/array.js");

function main() {
    const input = ["count 1 2 3 4 5", "count 1 '하나' 2 '둘' 3 '셋' 4", "count one two three four five", "add 35 23", "add 100 five", "add 10 20 30 40", "add ", "set 1 2 3 4 5 1 4 3 2 6 5 1 7"];

    // commander.js에서 콜백 리턴을 하지 않고 값만 리턴했을때 사용
    // input.forEach(element => {
    //     try {
    //         const command = element.split(" ")[0];
    //         let input_array = new array();
    //         for (let i = 1; i < element.split(" ").length; i++) input_array.push(element.split(" ")[i]);

    //         const commander = new Commander(command, input_array);
    //         result = commander.run();
    //         Log.log(command, result)

    //     } catch (err) {
    //         Log.log(err);
    //     }

    // });

    // commander.js에서 callback을 리턴해서 사용하는 법 연습(역시 잘안됨)
    input.forEach(element => {
        const command = element.split(" ")[0];
        let input_array = new array();
        for (let i = 1; i < element.split(" ").length; i++) input_array.push(element.split(" ")[i]);

        const commander = new Commander(command, input_array);

        commander.run((err, result) => {
            if (err) Log.log(err);
            else Log.log(command, result);
        });
    })

}
main();

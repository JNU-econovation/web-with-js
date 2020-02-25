const Commander = require("./domain/commander");
const Log = require("./util/log");
const array = require("./domain/array.js");

function main() {
    const input = ["count 1 2 3 4 5", "count 1 '하나' 2 '둘' 3 '셋' 4", "count one two three four five", "add 35 23", "add 100 five", "add 10 20 30 40", "add ", "set 1 2 3 4 5 1 4 3 2 6 5 1 7"];

    input.forEach(element => {
        try {
            const command = element.split(" ")[0];
            let input_array = new array();
            for (let i = 1; i < element.split(" ").length; i++) input_array.push(element.split(" ")[i]);

            const commander = new Commander(command, input_array);
            Log.log(commander);

        } catch (err) {
            console.log(err.message);
        }

    });

}
main();

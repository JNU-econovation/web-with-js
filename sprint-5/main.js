const Person = require('./domain/person');
const Game369 = require('./domain/game369');

function main() {
    // console.log("<< A와 B가 게임. accuracy 기본값 0.5 >>\n");
    const personA = new Person('A');
    const personB = new Person('B');

    const game369 = new Game369();

    personA.enterGame(game369);
    personB.enterGame(game369);
    // personA.startGame();

    console.log("\n");

    console.log("<< A와 B와 C가 게임. accuracy 각각 0.85, 0.78, 0.99 >>");
    console.log("게임은 B가 시작");

    const personC = new Person("C");
    personC.enterGame(game369);
    personA.setAccuracy(0.85);
    personB.setAccuracy(0.78);
    personC.setAccuracy(0.99);
    personB.startGame();

}

main();
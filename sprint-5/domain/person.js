class Person {
    constructor(name) {
        this.name = name;
        this.game;
        this.accuracy = 0.5;
    }

    setAccuracy(accuracy) {
        if (accuracy <= 0 || accuracy >= 1) {
            console.log("accuracy는 0보다 크고 1보다 작은 수를 입력해주십시오");
            return false;
        }
        if (isNaN(accuracy)) {
            console.log("accuracy는 소수로 입력해 주십시오");
            return false;
        }
        this.accuracy = accuracy;
    }
    enterGame(game) {
        this.game = game;
        game.participants.push(this);
        this.game.on(this.name, (number) => {
            game.progressGame(this.name, number);
        })
        console.log(this.name, "님이 게임에 입장하셨습니다");
    }

    startGame() {
        if (!this.game)
            throw new Error("플레이할 수 있는 게임이 없습니다.");
        this.game.emit('start', this.name);
    }
}

module.exports = Person;
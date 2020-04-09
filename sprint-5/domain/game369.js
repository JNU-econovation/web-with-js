const EventEmitter = require('events');

class Game369 extends EventEmitter {
    constructor() {
        super();
        this.participants = []; // person들을 모아서 받은 배열

        this.on('start', (starter_name) => {
            console.log(">>> Game Start <<<")
            this.startGame(starter_name);
        })

        this.on('end', () => {
            console.log(">>> Game Over <<<");
        })
    }

    startGame(starter_name) {
        if (this.participants.length <= 0)
            throw new Error("participants가 없습니다");
        let number = 1;
        const starter = starter_name;
        this.emit(starter, number, this.participants);
    }

    async progressGame(name, number) {
        if (this.is369(number)) { // 박수를 쳐야 할 때
            const index = this.findIndex(name);
            if (this.clapOrNot(this.participants[index].accuracy)) {
                await this.doAction(name, "clap!");
                this.emit(this.findNext(name), ++number);
            }
            else {
                const promise = await this.doAction(name, number);
                console.log(`${name}이(가) 게임에서 졌습니다`);
                this.emit("end");
            }
        } else
            await this.play(name, number);
    }

    is369(number) {
        let num = number;
        let digit;
        while (num > 0) {
            digit = num % 10;
            if (digit === 3 || digit === 6 || digit === 9)
                return true;
            num = parseInt(num / 10);
        }
        return false;
    }

    clapOrNot(accuracy) {
        let rand = Math.random();
        if (rand < accuracy)
            return true;
        return false;
    }

    async play(name, number) {
        const promise = await this.doAction(name, number);
        let next = this.findNext(name)
        this.emit(next, ++number);
    }

    doAction(name, action) {
        return new Promise((res) => {
            setTimeout(() => {
                console.log(`${name}: ${action}`);
                res(true);
            }, 1000);
        })
    }

    findNext(name) {
        let index = this.findIndex(name);
        const next_index = (++index) % this.participants.length;
        return this.participants[next_index].name;
    }

    findIndex(name) {
        for (let i = 0; i < this.participants.length; i++) {
            if (this.participants[i].name === name)
                return i;
        }
        return new Error("인덱스를 찾지 못함");
    }
}

module.exports = Game369;
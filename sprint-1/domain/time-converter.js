class TimeConverter {
  constructor(args) {
    this.caseTime = args.slice(0, -2); //시간
    this.caseUnit = args.slice(-1); //단위
    this.unit = ["s", "m", "h", "d"]; //인덱스 차이로 뭔가 해봐야지
  }

  // 검사해서 각자에 맞게 보냄?
  //문자열이 있는 위치까지 자르고 자르고
  converter() {
    if (
      this.unit.indexOf(this.caseTime.slice(-1)) <
      this.unit.indexOf(this.caseUnit)
    ) {
      //작은 -> 큰 테스트 케이스 0번, 3번에 해당
      let time = parseInt(this.caseTime);
      const h = Math.floor(time / 3600);
      const m = Math.floor((time % 3600) / 60);
      const s = Math.floor((time % 3600) % 60);
      return [0, h, m, s];
    } else if (
      this.unit.indexOf(this.caseTime.slice(-1)) >
      this.unit.indexOf(this.caseUnit)
    ) {
      if (this.caseTime.slice(-1) === "d") {
        let time = parseInt(this.caseTime);
        const h = time * 24;
        const m = time * 24 * 60;
        const s = time * 24 * 60 * 60;
        return [0, h, m, s]; //의미가 좀 달라져버리네
      }
    }

    for (let i = 0; i < this.caseTime.length - 1; i++) {
      if (
        this.caseTime[i] === "d" ||
        this.caseTime[i] === "h" ||
        this.caseTime[i] === "m" ||
        this.caseTime[i] === "s"
      ) {
        //한 번 찾으면 관둬야하는데 관두질 못하는건가? or i의 스코프 문제?
        //여기 좀 잘못짬
        let headTime = this.caseTime.slice(0, i);
        let tailTime = this.caseTime.slice(i + 1, -1);
        let time1 = parseInt(this.headTime);
        let time2 = parseInt(this.tailTime);
        const h = time1;
        const m = time2;
        const s = time1 * 60 + time2 * 60;
        return [0, h, m, s];
      }
    }
  }

  // isCorrect() {
  //   if (typeof this.caseTime != typeof this.caseUnit)
  //     return new Error("에러: 입력이 올바르지 않습니다.");
  // }
  // isValid() {
  //   for (let i = 0; i < this.caseTime.length - 1; i++) {
  //     if (
  //       this.caseTime[i] === "d" ||
  //       this.caseTime[i] === "h" ||
  //       this.caseTime[i] === "m" ||
  //       this.caseTime[i] === "s"
  //     )
  //       continue;
  //     else return new Error("에러: 허용하지 않는 단어가 존재합니다.");
  //   }
  // }
}

module.exports = TimeConverter;

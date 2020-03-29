# EVENT

이번 스프린트5에서는 이벤트에대해서 주로 다루어 볼 것입니다. 이벤트는 사전적으로 사건을 의미하고 자바스크립트에서의 이벤트를 등록한 다는 것은 어떤 특정 사건이 발생했을 때, 특정 행위를 동록한 다는 것입니다. 그럼 다음을 한 번 보겠습니다.

```javascript
Element.addEventListner("click", ()=> console.log("you"))
```

위에 addEventListner는 web api로 등록 된 이벤트 등록함수 입니다. 현재 이코드는 특정 엘레멘트가 클릭 되었을 때, 'you'를 출력하는 행동을 미리 선언해 노았습니다. 이렇게 웹은 대부분의 것이 이벤트 기반으로 수행됩니다.

### EventEmitter

노드는 강력한 비동기 제어 api들로 구성되어 있는데, 그 중 다양한 기본 보듈에 특징적으로 사용되는 모듈이 바로 **"EventEmitter"** 이다.

```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter{
    constructor(){
        super()
    };
    hello(){
        this.on("hello" ,()=> console.log("hello"))
    }
}

const myEmitter = new MyEmitter()

myEmitter.hello();

myEmitter.emit("hello");
// hello
```

 위는 간단한 예제이다. EventEmitter는 그냥 사용할 수 도 있지만 특정기능을 위해 이렇게 class로도 사용이 가능하다. 그리고 이런 이벤트 에미터는 기본적으로 on 과 emit으로 되어 있다. on 부터 살펴 보자면 on은 이벤트를 등록하는 기능을하는 함수이다. 첫 번째 인자로는 이벤트 이름을 받고 두 번째 인자로는 실행할 리스너를 받는다. emit이라는 함수는 등록된 이벤트를 실행하는 함수로써 첫번째 인자는 실행시킬 이벤트의 이름을 의미하고 그 뒤에도 추가적인 인자를 너을 수 있는데, 그 나머지 인자는 on 의 리스너의 함수 인자로 받아오게 된다.
 그런 이런 EventEmitter 가지고 무엇을 할 수 있을까? 서로 다른 클래스간 상호작용을 할 수 있다.



```javascript
const EventEmitter = require("events");

class myE extends EventEmitter {
  constructor() {
    super();
    this.list = [];
    this.on("subscribe", target => {
      this.list.push(target);
    });
    event.on("unsubscribe", target => {
      this.list = this.list.filter(value => target != value);
    });
  }
  subscribe(target) {
    this.emit("subscribe", target);
  }
  unSubscribe(target) {
    this.emit("unsubscribe", target);
  }
}
```

이렇게 이벤트를 담당해 놓는 친구를 만들어 놓고 다른 클래스에 속성으로 서 너어두면 어디 에 있든지 같은 이벤트를 수햏하게 된다.

```javascript
class shop{
    constructor(mye,employeeList){
        this.bell = mye;
        this.employee = employeeList;
        this.bell.on("give work", (work)=>{
            this.employee.forEach(emp => emp.can(work))
        })
    }
    givework(work){
        mye.emit("give work", work);
    }
}
class Emplo{
    constructor(mye){
         this.bell = mye;
    })
 }
 can(work){
     if(work is possible)
         this.bell.emit("give work")
 }
}
```

실제 동작하는 코드는 아니지만 이렇게 서로 상호작용하면서 동작하게 할 수 있다. 관련문서를 첨부해 놓겠다.
[관련문서](https://edykim.com/ko/post/events-eventemitter-translation-in-node.js/)



### 세미나 주제: 옵저버 패턴





# 미션 5

이번 미션은 이벤트를 활용하서 두 친구가 3,6,9 게임을 하는 프로그램을 만들 것입니다.

- 3,6,9, 게임의 룰을 따른다

- 숫자에 3,6,9가 포함되어 있으면 "짝"을 출력한다.

- 두 친구는 서로 번갈아가며 값을 말한다.

- 숫자에 3,6,9가 포함되어 있을 때 "짝"을 칠 확률은 50%이다.

- "짝"을 치는데 실패하면 게임이 종료되고 승자가 나온다.

- 두 친구는 같은 class를 기반으로 하고 있다.



```javascript
const personA = new Person("A");
const personB = new Person("B");
personA.makeFriend(personB);
personA.startWith(personB);

// A: 1,
// B: 2
........
```

위의 코드는 예시일 뿐입니다. 이번 미션은 보일러 플레이팅 없이 자유롭게 하시면 됩니다.















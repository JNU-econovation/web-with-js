# 개발 환경의 이해

첫번째 학습 주제는 개발 환경의 이해로 과연 Node가 무엇인지 그리고 ECMAscript는 무엇이고 javascript는 무엇인지 알아보는 것입니다.

## 🧐 NODE 이해하기

### 안녕, 친구들 난 Node 라고 해

> 갑자기 인사하니 놀랐지? 지금부터 난 누구이고 어떤 친구인지 너희들에게 알려줄게. 난 Javascript라는 학교에 재학중이고 CommonJs라는 클럽 소속이야 그런데 최근에 ECMAScript라는 클럽에도 제의가 와서 그 클럽에도 잠깐 발을 담구고 있어! 나는 항상 등교할 때 V8이라는 버스를 타고 등교를 해 왜냐하면 2008년에 새로 나온 좋은 기종의 버스라 엄청 빠르거든! 사실 너무 예전일이라 잘 모르겠지만 말이야!

#### Node는 javascript를 동작 시켜주는 runtime library 다!

런타임 라이브러리란 무엇일까? 런타임 라이브러리는 여러분이 흔히 알고 비스크립트 언어의 컴파일러와 비슷한 역할을 한다고 생각하면 된다. node는 말그대로 크롬이 개발한 V8이라는 엔진위에서 브라우저를 동작시키는 것 뿐만 아니라 서버사이드에서도 javascript를 사용하고자 만들어진 런타임 라이브러리 입니다.

때문에 node는 브라우저 뿐만 아니라 서버사이드 그리고 일반적인 프로그래밍 영역까지 진출하는 마음을 가지고자 프로그래밍 언어로써의 자바스크립트를 정의하고 있는 commonJS라는 모듈 규칙을 따릅니다. 하지만 12버전 부터는 브라우저의 모듈 규칙도 수용하기 위해 ECMAscript 표준도 조금씩 반영해 나가고 있습니다.

_**기표의 고민** : node를 깔고 프로젝트를 하던 2018년 5월쯤 멘토링을 네 번정도 받은 날에 node에 개한 동영상을 보았지만 기록하지 않아서 다 까먹고 만다. 또 한 번도 이렇게 명령으를 사용하여 프로그램을 실행 해 본적이 없었기 때문에 이것이 무엇인지 많이 고민했다. 그래서 당시 **기표**는 이게 비쥬얼 스튜디오의 F5쯤 되는 거라고 이해 했다._

<p align="center">
    <img src="https://user-images.githubusercontent.com/44811887/74207026-29171880-4cc1-11ea-9de4-46c2aa03adcf.png" height="400px">
</p>

### Node 설치하기

[Windows](https://docs.microsoft.com/ko-kr/windows/nodejs/setup-on-windows)

[OS X](https://nodejs.org/ko/download/package-manager/#macos)

[Linux(우분투, 레드햇, 센토스 등)](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)

설치 후에는 꼭 버전 확인해 주기

```bash
node --versionnpm -v #같이 설치 된다 이친구는
```

만약 버전확인이 안된다면 그 것은 환경변수 문제일 것이므로 환경변수를 잘 설정해 주자! 언제든지 cmd 와 같은 터미널 창에서 설치를 했음에도 원하는 command가 없다고 나온다면 그것은 바로 **환경변수** 문제입니다.

### Node의 모듈화

앞서 node가 CommonJS라는 클럽에 가입하고 있는데, CommonJs는 위키백과에 다음과 같이 정의 되어 있습니다.

> CommonJs는 웹 브라우저 밖의 자바스크립트를 위한 모듈 생태계의 규칙을 설립하기 위한 프로젝트이다.<sup>[1]</sup>
>
> [1]: https://ko.wikipedia.org/wiki/CommonJS

```javascript
//add.js
function add(a, b) {
  return a + b;
}
```

여기 덧셈을 해주는 코드가 있습니다. 이 함수를 외부에서 사용하고자 하면 어떻게 해야할까요?

바로 exports 라는 객체를 이용해서 외부에서도 이 함수에 접근할 수 있게 해줍니다.

```javascript
//add.js
function add(a, b) {
  return a + b;
}
module.exports = add;
//main.js
const add = require("./add.js");
console.log(add(1, 2)); // 3
```

_**기표의 고민** : node를 이용하여 열심히 코딩을 하는 와중에 의문이 생겼다. 왜 exports를 브라우저에서는 잘 사용이 안되는지? 그 이유에 대해서 잘 몰랐지만 규칙이 달라서 그렇다고 생각하게 되었다. 또 다른 고민은 만약 다른 모듈의 add 함수를 부른다면 add라는 함수가 선언되어 메모리에 할당 될 때 중복이 되는 것은 아닌지 고민을 했다. 이런 부분을 고민해 보면 좋을 것 같다._

#### 참고자료

- [CommonJS](https://requirejs.org/docs/commonjs.html)

- [What is Node](https://nodejs.org/ko/about/)

- [Node doc](https://nodejs.org/dist/latest-v13.x/docs/api/)

- [ES6 이후의 노드 (12++)](https://nodejs.org/ko/docs/es6/)

### 세미나 주제 #1 : Node는 많은 모듈을 사용한다. 그렇다면 Node의 패키지 매니저는 무엇이고 어떻게 잘 관리 할 수 있을까? 또, 패키지 파일의 구성은 어떻게 되어 있나?

---

## 😍 ES6+ 이해하기

혹시 여러분은 과거에 자바스크립트가 어떤 이름을 가지고 있었는지 알고 있었습니까? 과거 자바스크립트는 브라우저에서 문서의 동작을 돕기위해서 적힌 한 두줄의 작은 코드에 불과 했지만, 웹이 발달함에따라 90년데에 다양한 이름과 표준으로 등장하게 됩니다. 그게 훗날 자바스크립트로 명명되는 넷스케이프라는 브라우저의 라이브스크립트(모카 등)와 인터넷 익스플로러의 J스크립트입니다. 하지만 브라우저가 다양해짐에따라 이러한 웹동작언어의 통일이 필요하다고 느낀 넷스케이프 회사는 ecma-262라는 표준을 만들게 되었습니다. 때문에 당시 자바스크립트와 J스크립트등은 이 표준을 따르기 위해 개발을 했고 이 표준에서 확장된 기능을 자체적으로 개발하고 있습니다. 오늘날 브라우저의 자바스크립트 라고 하면 바로 이 ECMAscript 를 말합니다.

_**기표의 고민** : 웹 프론트를 제작하면서 node와는 달리 문법이 조금 많이 다르다는 것을 깨닫게 되었고 이런 괴리감을 정리하기 위해 node 자바스크립트 웹 자바스크립트라고 서로 따로 부르며 공부하게 되었다. 그런데 도대체 왜 다른지 그 때는 이해할 수 없었다. 간단히 생각해 보자면 자바스크립트는 원래 각각의 브라우저만을 위해 만들어진 고객맞춤형 제품이다. 그게 점차 시간이 지나고 브라우저간 경쟁이 과열 되면서 ~~개발자들이 죽어나가...~~ 통일 된 것 같다._

**Node 이해하기**에서 여러분들은 깨달았을지도 모릅니다. 바로 CommonJS와 비슷하게 표준으로서 자리잡은 ECMAscript또한 표준이라는 것입니다. 하지만 서로 느낌은 조금 다르다. 이 부분은 스스로 공부해보면 좋을 것 같습니다. 때문에 과거 node 프로그래밍에서는 웹에서 쓰는 문법을 사용하지 못하는 경우가 많았습니다. 하지만 지금은 대부분 사용할 수 있습니다! 왜냐하면 node가 12버전에 들어오면서 ECMAscript의 표준을 포함하기 시작했고 ECMAscript도 Node를 위한 표준도 만들어 냈기 때문입니다.

그렇다면 ES6는 무엇일까요? 간단하게 ECMAscript의 여섯번째 버전입니다. 그리고 2015년에 나와서 ECMAscript 2015라고도 합니다. 그러면 다른 버전도 있다고 하는데 왜 ES6에 사람들은 열광하면서 "ECMAScript Harmony"라고 부르는걸까요? 왜냐하면 이 버전이 오랜만에 나온 버전이기도하고 자바스크립트를 프로그래밍 언어에 올려 놓은 버전이라고 할 수 있기 때문입니다. 이 이후부터 나오는 버전들은 자바스크립트를 한 층 성장하게 해주었기 때문에 뭉뚱그려 ES6+라고 합니다.

그럼 이데 ES6+에 추가된 대표적인 기능들을 살펴봅시다.

### 1. default Prameter of Function

첫번째는 바로 함수 인자의 기본값을 설정할 수 있다는 것입니다. 원래는 이게 되지 않아서 비슷한 기능들을 한번에 처리하기위해서는 복잡한 과정이 필요했지만 이 기능 덕분에 더 편하게 개발할 수 있게 되었습니다.

```javascript
function person(name, age, gender = "empty") {
  return {
    name,
    age,
    gender
  };
}
console.log(person("김기표", 26));
// { name : "김기표", age : 26, gender : "empty"}
```

### 2. rest Parameter

rest 파라미터는 바로 이 것을 의미합니다. "**...**". rest 파라미터는 함수의 인자를 설정할 때 배열 혹은 오브젝트에 필요한 부분만 이름으로 담고 나머지는 rest로 처리할 수 있어 매우 유용합니다.

```javascript
function person(name, ...rest) {
  return {
    name: name,
    books: rest
  };
}
console.log(person(["김기표", "너의 모든 것", "정의란 무엇인가"]));
// { name : "김기표", books : ["너의 모든 것", "정의란 무엇인가"]}
```

### 3. template iteral

ES6의 혁명이라고 할 수 있는 기능이 바로 이 기능입니다. 이 문법은 "`" 이 역따옴표를 사용하여 문자열을 관리할 수 있게 해주는데 좋은 점은 "\${}" 이 신택스를 이용하여 내부에 자바스크립트로 내용을 치환할 수 있다는 것입니다. 때문에 매우 유용하게 사용할 수 있습니다.

```javascript
function template(name) {
  return `Hello ${name}!`;
}
console.log(template("kiki"));
// hello kiki!
```

### 4. 분할 구조 할당

이것도 매우매우매우 유요합니다. 변수를 선언 할 때, 그리고 구조적으로 값을 대입할 때 불필요한 변수들을 줄이는데 매우용이합니다.

```javascript
//object destructure
const person = { name: "김기표", age: 26 };
const { name, age } = person;
console.log("name: ", name); // name: 김기표
console.log("age: ", age); // age: 26
//array destructure
const person = ["김기표", 26];
const [name, age] = person;
console.log("name: ", name); // name: 김기표
console.log("age: ", age); // age: 26
```

이 기능은 함수의 파라미터를 선언할 때도 사용할 수 있습니다.

### 5. 스코프가 있는 변수 선언자 let, const

원라 재바스크립트네서 변수를 선언할 때는 타입이 존재하지 않고 스코프조차 없는 var만을 사용해서 다양한 문제를 겪었습니다. 때문에 스코프를 가지고 있는 변수 선언자가 나와서 자바스크립트의 가치가 더욱 올라갔습니다.

```javascript
//변수의 선언과 재할당에 관해서
let name;
const deall; //error : 값할당이 안괴어 있다.
let name; // error : 이미 같은 이름을 가진 변수가 있다
const age = 36;age = 26; // error: const는 값을 변경할 수 없다.
name = "kiki";
name = "kikis"
//스코프에 관해서
let name = "kiki"
function names(x){
    let name = x +"star"
    return name
}
names(name);
console.log(name); // "kiki"
```

### 6. Class

원래 자바스크립트에서는 class 가 존재하지 않았습니다. 비슷하게 동작하는 protorype과 같은 것이 있었기 때문입니다. 하지만 class가 생기게 되면서 자바스크립트는 풍부해졌습니다. 하지만 아쉽게도 아직 인터페이스나 프라이빗과 같은 것들이 완전히 구현 된 것이 아니지만 이것에 대한 대안으로 typescript가 존재하기 때문에 다음에 시간이 된다면 typescript도 동부 해보시면 좋을 것 같습니다.

```javascript
class Person{
    #phoneNumber
    //크롬에서 이렇게 사용한다면 phoneNumber가 private이라는 겁니다. 실제 동작합니다.
    constructor(name, age, phoneNumber){
        this.name = name;
        this.age = age;
        this.#phonNumber = phoneNumber;
    }
}
const person = new Person("kiki", 26, "01000000000");
console.log(person.name); // kiki
console.log(person.age); // 26
console.log(person.#phonNumber); // 프라이빗 밸류 오류
```

예시에서 보시는 것 과 같이 Person 내부에서는 this를 이용하여 자신의 프로퍼티와 함수를 자유롭게 사용할 수 있습니다.

이 외에도 중요한 기능이 매우 많지만 어떤 기능은 다른 챕터에서 깊이 들어갈 것이므로 필요하다면 직접 찾아보면 더 도움이 되실 것 같습니다.

#### 참고자료

- [ECMAscript 경황](http://kangax.github.io/compat-table/es2016plus/)

### 세미나 주제 #2 : ES6+에는 함수의 다른 표현식이 존재한다고 들었다. 그 표현식은 무엇이고 그 표현식의 함수와 ES6+ 이전의 함수 표현식은 어떻게 다른가?

---

# Misson #1

## 주제: 단위 변환기(시간)

### 입출력 예제

```
//입력
"1600s m"
"1h35m s"
"3d h"
//출력
"26m40s"
"5700s"
"72h"
```

## 파일 구조

main.js : 실제 출력이 진행되는 곳

#### util 폴더

- log.js: 출력 기능을 담당하는 class

#### domain 폴더

- time-converter.js: 단위변환기 (시간)

### 문제풀이 규칙

- 아너코드를 지키자

  - 다른 팀원의 코드를 배끼지 않고 스스로 학습합니다.

  - 인터넷 코드를 그대로 붙이지 않고 스스로 합니다.

  - 질문은 언제든지 환영입니다.

    - 질문에 답하는 것도 언제든지 환영입니다.

- 클린코드를 지킵니다.

  - [객체지향 생활체조](https://developerfarm.wordpress.com/2012/02/03/object_calisthenics_summary/): 이 글은 java에 관한 것이라 많이 부합하지 않는 것이 많을 것입니다. 때문에 규칙1, 규칙2, 규칙3, 규칙5, 규칙6, 규칙9을 지키면 좋을 것 같습니다.

  - 변수의 이름은 최대한 의미있게 사용하면 좋을 것 같습니다.

  - 하나의 함수에는 한가지 일의 책임만 할당합니다.

  - 하나의 클래스에는 한가지 객체의 책임만 가집니다.

  - 전역변수를 사용하지 않습니다.

- ES6+ 사용하기

  - let과 const는 잊지 않고 사용합시다. var는 절대로 금지합니다.

  - ES6+는 앞으로 코드를 작성할 떄 생산성을 많이 끌어올려주기 때문에 권장합니다.

### 문제 조건

- s는 초, m은 분, h는 시, d는 일을 의미한다.

- 1d == 24h == 1440m == 86400s

- 단위를 변환 할 때 소수로 변환할 수 없다.

- 단위를 변환 할 때 나머지는 나머지 단위중 가장 큰 단위로 환산한다.

  - 3837s h => 1h3m57s

- 입력의 첫번째 인자가 기준 시간이며 두번 째 인자가 변환해야될 단위이다.

- 입력을 구현하지 않는다.

  - node main.js 를 실행시키면 아래예시들이 올바른 출력을 내면 된다.

- 이 두 부분에 에러처리를 해 놓는다.

  - 입력이 불완전한 경우: "에러: 입력이 올바르지 않습니다."

  - 입력에 숫자와 sdmh중 존재하지 않는게 있다면: "에러: 허용하지 않는 단어가 존재합니다."

  - 이 두 에러의 우선순위는 본인이 결정하면 된다.

- **주어진 클래스 외에도 사용하고 싶은 것이 있다면 얼마든지 추가해도 된다.**

### 입력예시

- "1600s m"

  - 결과 "26m40s"

- "1h35m s"

  - 결과 "5700s"

- "3d h"

  - 결과 "72h"

- "3837s h"

  - 결과 "1h3m57s"

- "1400s"

  - 결과 "에러: 입력이 올바르지 않습니다."

- "1700H m"

  - 결과 "에러: 허용하지 않는 단어가 존재합니다."

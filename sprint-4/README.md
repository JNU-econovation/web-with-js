# 동기와 비동기 - (2)

1편에 이어서 이번 편에서는 저번 편에서 비동기에 대해서 이해했다면 어떻게 비동기를 동기처럼 프로그래밍 할 수 있는지, 그리고 어떤 상황에서 비동기 이벤트를 만들어야하는지 공부해보겠다.

우선 비동기를 동기처럼 제어하는 방법은 총 3가지가 있다. 아마 여러분들이 웹 프로젝트를 했다면 매우 흔히 보았던 예제들일 것이다. 그럼 확인해 보러가자

### 콜백

여러분은 앞서 스프린트를 진행하면서 콜백에대해 많이 접해 봤을 거다. 대체로 인자를 함수로 받는다라는 의미의 콜백을 여러분들은 많이 사용했을 것이다. 사실 콜백은 그러한 인자로 사용되는 특성 말고도 이벤트나 비동기 함수의 실제 실행함수로서 동작한다는 사실이다. 이와 같은 특성 때문에 비동기 함수를 사용할 때 비동기를 제어하기 위해서 콜백을 많이 사용한다. 다음 예시를 보자

```javascript
setTimeout(() => {
  console.log(1);
}, 0);
console.log(2);
```

여러분들은 이 코드의 결과가 2가 출력된 후에 1이 축력 되는 것은 알고 있을 것이다. 그렇다면 1다음에 2가 출력 되게 하기 위해선 어떻게 해야할까? 매우 간단하게도 2를 출력하는 부분을 setTimeout의 콜백함수 안으로 너으면 원하는 순서대로 출력 된다. 바로 스코프로 가두는 것이다.

너무 간단해서 방법처럼 보이지 않지만 조금 더 복잡한 경우를 살펴 보자.

```javascript
var showline = function(callback) {
  console.log("post 모듈 안에 있는 showline 호출");
  pool.getConnection(function(err, conn) {
    if (err && conn) {
      conn.release();
      return callback(err, null);
    }
    if (err) return callback(err, null);
    console.log("데이어베이스 연결 스레드 아이디 : " + conn.threadId);
    var exec = conn.query("select * from noticeboard", function(err, rows) {
      conn.release();
      console.log("실행된 SQL : " + exec.sql);

      if (err) {
        callback(err, null);
        return;
      }
      if (rows.length > 0) {
        console.log(rows);
        callback(null, rows);
      } else {
        console.log("글 찾지못함");
        callback(null, null);
      }
    });
    conn.on("error", function(err) {
      console.log("데이터베이스 연결 시 에러 발생함.");
      console.dir(err);

      callback(err, null);
    });
  });
};
```

위함수는 노드의 라우터 부분에 사용하기 위해 분리한 콜백을 활용한 함수이다. 내부에는 pool이라는 mysql 함수도 사요ㅇ하고 있다. 함수를 자세히보면 showline이라는 함수는 콜백을 받아 콜백 내부에서 디비를 조회하고 원하는 값을 callback에 너어주게 된다. 만약 이렇게 콜백으로 처리하지 않으면 위에서 if문으로 분기하는 것은 의미가 없을 것이다. 왜냐하면 비동기 함수를 이용하기 때문에 언제 어떻게 실행될지 모르기 때문이다. 이렇게 거대한 부분을 콜백으로 감싼 이유가 비동기를 제어하기위해서 쌓은 것이다!

### 프로미스

들어본 사람도 있을 것이고 들어본적이 없는 사람도 있을 것이다. 그런데 여러분이 사용하는 대부분의 web API, module, 기타 자바스크립트 구문에서는 프로미스가 사용되는 곳이 매우 많다. 그리고 프로미스는 이름에서도 알 수 있듯이 약속된 순서로 동작한다. 그럼 예제를 통해 알아보자.

앞선 예제에서는 로그를 콜백안에 너음으로써 맞추었지만 프로미스는 일련의 프로미스 함수를 만들면 된다.

```javascript
const promise = new Promise((res, rej) => {
  setTimeout(() => res(1), 1000);
});
```

이렇게 만든 프로미스틑 대기상태가 된다. 기본적으로 프로미스는 대기(Pending), 이행(Fulfilled), 실패(Rejected) 상태가 있고 현재 promise 변수의 상태는 대기 상태이다 왜냐하면 아직 사용되지 않았기 때문이다. 실제 대기 상태는 new Promise 가 실행된 상태를 뜻하고 이행 상태는 내부 함수가 실행됨을 뜻한다. 이 때 then을 통해 resolve 값을 받아 올 수 있다. 위 코드에서는 res 를 뜻한다. 그리고 실패상태는 reject 함수가 호출된 상태(rej) 를 의미하고 catch를 통해 이 에러값을 불러 올 수 있다.

```javascript
const promise = new Promise((res, rej) => {
  setTimeout(() => res(1), 1000);
});
promise.then(result => console.log(result)).then(() => console.log(2));
```

이런식으로 then을 중첩한다면 순서대로 숫자가 출력 되게 된다.

[관련문서](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/#%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4%EC%9D%98-3%EA%B0%80%EC%A7%80-%EC%83%81%ED%83%9Cstates)

### async await

그런데 자바스크립트 개발자는 프로미스를 사용한 비동기 데어 패턴도 복잡하다고 하는 경우가 많았다. 그래서 프로미스와 자바스크립트에서의 제너레이터가 함쳐진 개념인 async await이 생겼다. 이 친구들도 비동기를 제어하는데 큰 공헌을 하지만 이친구들은 프로미스를 리턴하는 함수에서 만 동작하고 async 함수는 프로미스를 리턴한다. 때문에 위 프로미스를 설명했던 코드에서의 예시는 별로다. 하지만 함수 내부에서는 강력하다.

```javascript
function hello() {
  return new Promise((res, rej) => {
    setTimeout(() => res("hello"), 1000);
  });
}

async function bow() {
  const hellow = await hello();
  console.log(hellow);
}
```

위에서 hello는 프로미스를 반한하는데 2초가 걸린다. 그런데 아래 bow 함수에서 await릏 붙여주면 2초를 기다린 후 겨롸를 hellow 변수에 담아주게 되고 실제로 bow 함수가 실행 되면 2초 후에 hello가 출력이 된다. 이와 같은 것들은 네트웤와 통신할 때 매우 요긴하게 쓰이게된다. 뿐만 아니라 프로미스를 반환하는 대부분의 모듈 함수들에게 잘 동작한다.

### 총평

매우 간단하게 위 세 가지 개념을 훑어보았다. 때문에 여러분이 저 개념들을 익히기 위해서는 조금 더 공부가 필요하다. 이번 주 세미나는 없다.

# 미션4

- 미션 3에서 우리는 메뉴가 단 한 가지 였다. 그래서 우리는 매뉴를 늘릴 것이다.

- 기존 햄버거는 2초, 치즈버거는 3초, 치킨버거는 4초가 걸린다.

- 직원 수도 처음에 설정할 수 있다.

- 직원은 맡은 역할이 있다.

  - 모든 직원은 햄버거를 만들 수 있다.

  - 직원이 3명 이상일 때 다음을 만족한다.

  - 직원은 치킨버거나 치즈버거중 한 가지만 만들 수 있다.

  - 하지만 모든 직원중에는 치킨버거나 치즈버거를 만들 수 있는 사람이 있다.

  - 이 배분 과정은 직원을 생성할 때 실행된다.

- 여러분들은 비동기를 제어할 떄 프로미스를 사용할 수 도 있습니다!

- 그외 룰은 이전 미션과 같다.

```
//입력
[3,"햄버거","치킨버거"]

//출력
직원1은 햄버거, 치킨버거를 만들 수 있습니다.
직원2는 햄버거, 치즈버거를 만들 수 있습니다.
직원2는 햄버거, 치킨버거를 만들 수 있습니다.
2초 직원1 햄버거
4초 직원3 치킨버거
종료
```

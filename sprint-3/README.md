# 동기와 비동기 - (1)

언제쯤 자바스크립트가 단일 스레드로 동작하는 - 엄밀히 말해 조금 다르긴하지만 - 프로그래밍 언어라는 것을 들어본적이 있을 것입니다. 때문에 사용자들은 이러한 단점을 극복하기 비동기 프로그래밍이라는 아이디어가 생겨난 것입니다.

하지만 이런 일이 가능한 이유는 자바스크립트가 그 자체로 해석되어 동작되는 것이 아니라 호스팅 환경에서 동작하기 때문입니다. 실제로 여러분은 node 혹은 브라우저를 이용하여 javascript를 실행시키면서 이러한 일들을 경험하게 됩니다.

이러한 비동기의 과정을 이해하기 위해서는 실제로 프로그램이 어떻게 동작하는지 알아야합니다.

## 콜스택

자바스크립트의 책을 펴보면 항상 나오는 내용이 있습니다. 바로 콜 스택에 대한 것입니다. 자료구조라는 과목을 배웠다면 여러분은 **스택**에 대해서는 잘 알고 있을 겁니다. 들어오는 값들이 순서대로 쌓아지고 빠져나갈때는 위에 것 부터 나가는 모습이 머리속에 그리고 있을 것입니다. 실제로 **콜스택**은 스택처럼 동작합니다. 함수나 내부 연산을 불러서 하나씩 쌓아가며 실행합니다.

```javascript
function first(){
    console.log("I'm first");
}

function second(){
    first();
    console.log("I'm second");
}

console.log("hello");
second();
```

콜 스택이라는 구조로 인해서 위 프로그램의 결과는 다음과 같이 나올 것입니다.

```javascript
// hello
// I'm first
// I'm second
```

왜 이렇게 실행이 되었는가하면 자바스크립트는 인터프리터 언어로써 컴파일 되지 않고 한 줄씩 읽어 내려가며 코드를 실행하게 됩니다. 이 때 데이터를 저장해놀 공간인 힙, 스택, 큐 등 다양하게 구현되어 있는 내부 구조를 통해 실행 되게 되는데, 싱행되는 하나의 구문은 의무적으로 콜스택에 쌓이게 됩니다. 

![https://cvws.icloud-content.com/B/AYNg6OpRSYqfqXXHZbMFjmJiAjstASozP0CJgjgs5SJqb5qJATknpxCU/call-stack.gif?o=AvYWoSF3VruCpmetJloYptGVPqKTE2ZXAUPSxgY89gRm&v=1&x=3&a=CAogn9z0QCvPHdrxVY7GykXAjB11QLZe_HTZAf4vKj38ePMSHRCQ6dq9iC4YsOCRvoguIgEAUgRiAjstWgQnpxCU&e=1582825762&k=Elzs_qmugdIWhffgLMddKw&fl=&r=e15413dc-8663-480b-a465-783e1bd3a4ba-1&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=60&s=pDrk8hsQNjqGZk_L-EMnlySS77Q&cd=i](https://cvws.icloud-content.com/B/AYNg6OpRSYqfqXXHZbMFjmJiAjstASozP0CJgjgs5SJqb5qJATknpxCU/call-stack.gif?o=AvYWoSF3VruCpmetJloYptGVPqKTE2ZXAUPSxgY89gRm&v=1&x=3&a=CAogn9z0QCvPHdrxVY7GykXAjB11QLZe_HTZAf4vKj38ePMSHRCQ6dq9iC4YsOCRvoguIgEAUgRiAjstWgQnpxCU&e=1582825762&k=Elzs_qmugdIWhffgLMddKw&fl=&r=e15413dc-8663-480b-a465-783e1bd3a4ba-1&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=60&s=pDrk8hsQNjqGZk_L-EMnlySS77Q&cd=i)

***위 GIF에는 오류가 있습니다. (const => function)***

위 그림과같이 동작하기 때문에 위에 적힌대로 결과가 나타나게 됩니다.



## 이벤트 루프

그런데 저런 방식이라면 자바스크립트는 동기적으로만 동작하기 때문에 비동기적으로 동작하게 하기 위해서는 특수한 당치 몇가지가 필요하게 됩니다.

자바스크립트는 자바스크립트 인터프리터안에서 실행되게 되는데 이 때 브라우저에서는 콜스택 의외의 web api라는 부분도 존재하고 또 다양한 큐도 존재합니다. 재표적으로는 callback queue가 존재합니다. 이러한 다양한 장치들 덕분에 비동기가 실행 되는데 여기서 가장 중요한 역할을 하고 있는 것은 바로 이벤트 루프입니다. 이벤트 루프의 역할은 간단합니다. stack이 다 비워져있는지 보고 콜백큐에 담겨있는 함수들을 스택에 쌓아주는 역할을 합니다.

```javascript
function first(){
 setTimeout(()=> console.log("I'm first"),3000)
}
function second(){
 first();
 console.log("I'm second");
}
console.log("hello");
second();
```

위의 코드를보고 자바스크립트가 동기적인 것으로만 알고 있는 친구들은 출력결과를

> hello
> 
> (3초후) "I'm first"
> 
> I'm second"

이와 같이 생각할 것이다. 하지만 setTimeout 이라는 함수는 실제 동작이 실행을 web API에 넘겨주어 인자의 콜백을 3초 후에 콜백큐에 담게한다. 그리고 이벤트루프는 스택이 모조리 다 사라질때까지 기다린 후에 콜백큐에 있는 "console.log("I'm first")"를 실행하게된다.

> "hello"
> 
> //setTimeout 실행 (이때부터 3초대기)
> 
> "I'm second"
> 
> // 스택이 다빠지고 콜백큐에 함수가 존재한다면 이벤트루프가 그 함수를 스택에 옮김
> 
> "I'm first"

![](https://img.velog.io/post-images/pa324/40069bd0-166e-11ea-929a-9b65c9994145/image.png?w=1024)

간단한 구조의 이미지이다.



### 세미나 주제5 : setTimeout 의 다양한 활용방법에 대해서 고민해보고 web api에서 이렇게 비동기적으로 동작하는 함수들을 찾아보자.



# 미션3

## 1

- 동기적으로 동작하는 함수 만들기

- 비동기적으로 동작하는 함수 만들기

- 다음과 같은 결과를 도출해보다.



```javascript
//sync-async.js
syncf("first",1000);
asyncf("second",1000);
syncf("third",0);
asyncf("fourth",1000);

//1 first
//1 third
//2 second
//2 fourth 
// 1과 2는 프로그램 실행 후 걸린 시간을 의미한다.
```

## 2

- 우리는 햄버거가게를 운영하고 있다.

- 직원은 2명이다

- 햄버거당 만드는 시간은 2초이다.

- 직원은 동시에 일을 할 수 있다.

- 직원은 동시에 하나의 햄버거만 만들 수 있다.

- 모든 주문이 완료 되면 프로그램을 종료한다.

- 다음과 같은 결과를 도출한다.



```javascript
shop.order(3);

//2: 햄버거를 완성하였습니다.
//2: 햄버거를 완성하였습니다.
//4: 햄버거를 완성하였습니다.
//주문이 완료되었습니다.
// 여기서 2, 4는 실행시키고 걸린 시간이다. 출력하지 않아도 된다.
```

HINT : **setInterval**



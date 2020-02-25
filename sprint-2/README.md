# 프로토타입과 메서드

두 번째 학습 주제는 프로토타입이 무엇인지 알고 사용할 수 있고 class에 대해서 더 깊히 이해하는 것입니다.

## 프로토타입

프로토타입 객체는 다른 객체가 상속 받았을 때 자신의 인스턴스와 메서드를 사용할 수 있도록 정의한 객체입니다. 대표적으로 Object, Array, String 등이 있습니다. 'length'라는 인스턴스와 'toString'이라는 메서드가 있는데, 이러한 인스턴스와 메서드들을 우리는 표준내장 객체인 Object, Array, String을 생성하지 않고도 사용할 수 있는데, 특정 자료형이 이미 이러한 내장 객체의 프로토타입을 상속 받았기 때문입니다. 여기서 상속이란 의미는 프로토타입 체이닝이 되었다는 의미입니다.

```javascript
const list = [];
list.push(1);
console.log(list);
// [1]
```

위 코드에서 list는 Array라는 객체로 생성 되지 않았음에도 초기화가 될 때 이미 [] 를 통해 선언이 되어서 Array의 프로토타입 프로퍼티인 push 라는 메서드를 사용할 수 있게 된 것입니다. 이러한 점을 이용해서 간단리 사람을 정의해보고 다양한 사람들을 만들어보는 과정을 통해 프로토타입을 더 이해해 보도록 합시다.

### Person 만들기

```javascript
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
```

여기 Person이라는 함수가 정의 되어 있습니다. 이 때 이 함수는 객체가 됩니다. 이해가 안 되실 수도 있겠지만 실제 자바스크립트에서 Function은 Object를 상속받은 객체입니다. 이때 이 함수 내부에서 this라는 객체를 통해 자신의 인스턴스들을 정의 하고 있습니다. 바로 name, age, hobby 입니다. 때문에 이 Person이라는 객체를 이용해서 다양한 것들을 할 수 있습니다.

```javascript
const person1 = new Person("kiki", 26, ["read a book"]);
console.log(person1.name);
//"kiki"
```

이렇게 인서턴스에 바로 접근할수 있으며

```javascript
Person.prototype.come = function() {
  console.log("Come Here ", this.name);
};
person1.come();
//"Come Here kiki"
```

메서드들을 추가하고 수정할 수 있습니다. 이러한 프로토타입 객체의 특성은 기존에 알던 Class와는 매우 다르다는 것을 알 수 있습니다. 여기서 프로토타입 객체는 상속을 통해 메서드가 복사되는 것이아닌 상속을 통해 체인이 연결되어 찾아 갈 수 있다는 것입니다. 언제든지 Object.getPrototypeOf(obj) 함수를 통해 프로토타입에 접근할 수 있습니다. 만약 생성자라면 prototype이라는 속성을 통해 프로토타입에 접근이 가능하고 생성된 객체라면 위의 함수나 "\_\_proto\_\_"를 통해 접근할 수 있습니다.

이제 프로토타입 상속을 진행해 봅시다

### 프로토타입 상속

자바 혹은 다른 객체지향 프로그래밍을 해보았다면 상속이란 매우 간단해 보였을 지도 모릅니다. 하지만 프로토타입 상속은 조금 복잡합니다. 우선 우리는 Person이라는 객체를 상속 받기전에 Family 라는 함수를 먼저 선언 해보겠습니다.

```javascript
function Family(name, age, hobby, familyName) {
  Person.call(this, name, age, hobby);
  this.familyNmae = familyName;
}
```

Family를 생성할 때 Person도 같이 생성받고 상속 받기 위하여 이러한 방식으로 Person의 생성자를 불러냈다. 하지만 이것의 문제점은 인스턴스들은 가지고 올 수 있지만 프로토타입 체이닝을 형성하지 못해 프로토타입 속성인 come 메서들르 사용할 수 없다 때문에 다음과 같은 과정이 필요하다.

```javascript
Family.prototype = Object.create(Person.prototype);
```

우선 Family 라는 객체에 Person의 프로토타입을 상속 받기 위에 Family의 프로토타입에 Person의 프로토타입을 넣어주게 됩니다. 하지만 아직 끝나지 않았습니다. 이렇게 하면 프로토타입 메서드들까지 모두 사용할 수 있지만 Family의 생성자가 Person()이 되어 버리므로 추가된 인스턴스인 familyName은 undefined가 되는 등의 문제를 겪을 수 가있습니다. 때문에 Family의 생성자를 다시 설정해주어야합니다.

```javascript
Family.prototype.constructor = Family;
```

여러분은 이제 프로토타입을 기본적으로 모두 사용할 수 있게 되었습니다. 이제 간단히 이러한 프로토타입을 이용해서 나만의 고차함수들을 만들어 사용해봅시다.

### 세미나 주제 #3 : 이러한 프로토타입을 ES6에 들어서서는 더욱 간단하게 class라는 것을 가지고 구현을 하였다. 그렇다면 class 에서는 프로토타입이 어떻게 변형이 되었고, 상속의 방식은 어떻게 되었는지 설명해보자.

### 나만의 ForEach 만들기

여러분은 자바스크립트의 foreach라는 Array의 프로토타입 속성인 메서드를 아십니까? 아는 사람이 있을 수도 있고 없을 수도 있기 때문에 간단히 먼저 설명하겠습니다. forEach라는 메서드는 배열의 길이만큼 내부 콜백함수를 반복실행하는 함수입니다. 콜백 함수의 인자는 배열의 첫번째 값과 그 값의 인덱스 부터 차례차례 증가하면서 반복합니다. 때문에 이 함수는 다음과 같이 동작합니다.

```javascript
const list = [1, 2, 3];
list.forEach((value, index) => console.log(value, " ", index));
//1 0
//2 1
//3 2
```

기본적인 동작은 이렇습니다. 가장 첫번째 실행되는 콜백함수에는 list의 첫번째 값인 1이 value라는 인자에 담겨있고 첫번째 값의 인덱스가 index의 인자에 담기게 됩니다. 그리고 람다식의 실행부의 내용이 실행이 되고 다음 루틴으로 넘어가게 됩니다. 이러한 과정을 나열해 봅시다.

1. 우선 첫번째 인자와 인덱스를 찾습니다.

2. 인자와 인덱스를 콜백함수에 너어줍니다.

3. 콜백함수를 시행하고 다음으로 넘어갑니다.

이와 같은 로직을 생각하면서 천천히 구현해 봅시다.

#### step1

```javascript
Array.prototype.customForEach = function(callback) {
  const array = Object(this);
  callback(array);
};
[1, 2, 3].customForEach(array => console.log(array));
//[1,2,3]
```

먼저 반복을 하기전에 this라는 객체를 사용하기에는 다양한 위헙성이 따르기때문에 이 객체를 오브젝트화 시켜 변수에 넣어주었습니다. 그리고 콜백함수를 싱행했습니다. 그럼 위와 같은 결과가 나오게 됩니다.

#### step2

```javascript
Array.prototype.customForEach = function(callback) {
  const array = Object(this);
  const length = array.length;
  let index = 0;
  while (index < length) {
    callback(index);
    index++;
  }
};

[1, 2, 3].customForEach(index => console.log(index));
//0
//1
//2
```

forEach 함수는 반복해서 실행하는 함수이기 때문에 while문돠 length를 구하여 반복을 시키며 callback 함수에 index를 너어 주었습니다.

#### step3

```javascript
Array.prototype.customForEach = function(callback) {
  const array = Object(this);
  const length = array.length;
  let index = 0;
  while (index < length) {
    let value;
    value = array[index];
    callback(value, index);
    index++;
  }
};

[1, 2, 3].customForEach((value, index) => console.log(value, " ", index));
//1 0
//2 1
//3 2
```

이제는 값을 찾아 callback에서도 사용할 수 있게 하였습니다. 하지만 이렇게 구현한 것이 실제 MDN에 나와 있는 함수처럼 잘 구현 된 것이 아닙니다. 폴리필을 확인해보면 이 함수는 에러처리나 예외를 생각하지 않았기때문입니다. 하지만 이렇게 구현해본 것 만으로도 프로토타입과 콜백에 대한 어느정도의 이해를 할 수 가 있습니다.

자바스크립트에 Array에는 이와 비슷하고 유용한 다양한 프로토타입 함수들이 존재합니다. 바로 map, reduce, filter등이 존재합니다. 여기서 map, forEach는 매우 유사하게 동작합니다. 이러한 것들을 잘 구분해서 사용한 다면 저 좋을 것 같습니다.

### 세미나 주제 #4: map과 foreach, reduce 그리고 for 문의 차이점은 무엇이고 각각 어떤 상황에서 사용하면 좋을까요?

## 미션2

### 1. 커스텀 Reduce 함수를 만들어보자

리듀스 함수는 다음과 같이 동작한다.

```javascript
const list = [1, 2, 3, 4, 5];
const sum = list.reduce((acc, cur) => acc + cur);
console.log(sum);
//15
```

[참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### 2. 위에서 만든 Reduce를 가지고 명령입력기를 만들어 보자

입력 예시

> count 1 2 3 4 5
>
> add 35 23

출력예시

> count: 5
>
> add: 58

#### 규칙

- 명령은 count, add , set가 존재한다.

- count는 연달아 오는 값들의 개수를 셉니다.

  - 연달아 오는 값이 숫자든 문자는 상관 없습니다.

- add는 연달아 오는 값들의 합을 구합니다.

  - 연달아 오는 값이 숫자여야 합니다.

- 입력은 받는 기능은 구현할 필요가 없습니다.

- 되도록 직접 만든 reduce 함수를 사용합니다.

- 에러 처리는 구현할 필요가 없습니다.

  - 구현하셔도 좋습니다.

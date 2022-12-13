/* ---------------------------------------------------------------------- */
/* Symbol                                                                 */
/* ---------------------------------------------------------------------- */

// Javascript의 객체 프로퍼티 키(property key)는 오직 string, Symbol만 허용합니다.
// Symbol은 유일한 식별자(Unique Identifier)를 만들고 싶을 때 사용합니다.


// 고유한 ID 값을 Symbol을 사용해 생성합니다.
let id;


// Symbol 설명(description)을 설정해 다시 ID 값을 재할당해봅니다.
id;


// Symbol은 유일성이 보장되는 데이터 타입이므로 
// 설명이 동일한 Symbol을 여러 개 만들어도 각 Symbol은 서로 다릅니다.
// Symbol 이름은 이름표 역할만 수행합니다.

// 동일한 설명을 가진 Symbol을 아래 각 변수에 할당해보고 비교해봅니다.
let uidK;
let uidZ;

// console.log(Object.is(uidK, uidZ));


// Symbol과 string은 전혀 다른 데이터 타입이며,
// Symbol은 데이터 타입이 자동 변환되지 않습니다.

let uniqueId = Symbol('uique id');

// Symbol을 string 값으로 변경해봅니다.
// console.log(uniqueId);

// Symbol의 설명을 추출해봅니다.
// console.log(uniqueId);


/* 숨김 프로퍼티 ----------------------------------------------------------- */

// Symbol을 사용하면 외부에서 접근할 수 없는 숨김(hidden) 프로퍼티를 사용할 수 있습니다.
// 값 또한 덮어쓸 수 없기 때문에 보안 관점에서 유용하게 사용할 수 있습니다.

const createUser = (name, role = 'normal one') => {
  if (!name) {
    throw new Error('name 속성은 필수적으로 설정해야 합니다.');
  }

  // 숨김 프로퍼티 (외부에서 접근/조작 불가능)
  let nameId = Symbol(name);
  let roleId = Symbol(role);

  return {
    [nameId]: name,
    [roleId]: role,
    getName() {
      return this[nameId];
    },
    getRole() {
      return this[roleId];
    },
    // 접근 가능한 프로퍼티 (외부에서 접근/조작 가능)
    name,
    role,
  };
};

const yamoo9 = createUser('야무', 'special one');

// console.log(yamoo9.getName());
// console.log(yamoo9['야무']);
// console.log(yamoo9.getRole());
// console.log(yamoo9['special one']);


const hwang = createUser('황기연');

hwang['황기연'] = 'hwang gi yeoun';
// console.log(hwang.getName());
// console.log(hwang.황기연);

hwang[Symbol('황기연')] = 'HWANG GI YEOUN';
// console.log(hwang.getName());
// console.log(hwang[Symbol('황기연')]);


/* 열거되지 않음 ----------------------------------------------------------- */

// for ~ in 문으로 객체를 순환할 경우, 
// 키(key)가 Symbol인 경우 순환 과정에서 배제됩니다.

for (let key in yamoo9) {
  // console.log(key);
}


/* 글로벌 심볼 ------------------------------------------------------------ */

// Symbol은 설명이 동일하더라도 개별적으로 취급되지만,
// 간혹 설명이 같은 Symbol이 동일해야 할 경우도 필요합니다.
// 이런 경우 `글로벌 심볼`을 사용할 수 있습니다.

// 글로벌 심볼은 Symbol.for를 사용합니다.

let globalId;
let sameGlobalId;

// console.log(Object.is(globalId, sameGlobalId));


// 글로벌 심볼 데이터로부터 글로벌 심볼 이름 값을 알아내야 할 경우는
// Symbol.keyFor를 사용합니다.

let anotherGlobalId;

// console.log(Object.is(sameGlobalId, anotherGlobalId));
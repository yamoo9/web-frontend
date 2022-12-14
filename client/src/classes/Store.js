// React 클래스(class) 컴포넌트
// protoype 객체 지향 (class 문법 지원)
//
// 화살표 함수 사용 시 주의할 점
// arguments 사용 X → 나머지 매개변수 활용 (배열, for - of문 활용)
// this 사용 → 일반 함수 선언(또는 식)의 this와 다름

class Store {
  // private 필드 (2022. 6 공식 표준 승인)
  #state;
  #reducer;

  // 생성자 함수
  constructor(reducer, initialState = {} /* 기본 매개변수 */) {
    this.#reducer = reducer;
    this.#state = initialState;
  }

  getState() {
    // const _that = this;
    this.dispatch('in getState');
    setTimeout(
      function () {
        // _that.dispatch?.('in setTimeout 1s');
        this.dispatch('in setTimeout 1s');
      }.bind(this),
      1000
    );
  }

  printState() {
    this.dispatch('in printState');
    setTimeout(() => this.dispatch?.('in setTimeout 2s'), 2000);
  }

  dispatch(label) {
    console.log('%s dispatch action', label);
  }
}

const store = new Store((state) => {});

// null 병합 연산자 ??
// 옵셔널 체이닝 연산자 ?.

store.getState();
store.printState?.();

// if ('unknownMethod' in document && typeof document.unknownMethod === 'function') {
//   document.unknownMethod();
// }

// document.unknownMethod?.();

// this === undefined

// 일반 객체에서 메서드 정의 시 화살표 함수를 사용할 경우 this 주의!!!
const o = {
  name: 'myObject',
  show() {
    console.log(this);
  },
  look: function () {
    console.log(this);
  },
  watch: () => {
    console.log(this);
  },
  setName(newName) {
    setTimeout(() => {
      this.name = newName;
    }, 1000);
  },
};

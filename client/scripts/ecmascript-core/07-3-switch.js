/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

(function () {
  let sendMessage = '';

  switch (thisTime) {
    default:
      console.warn(
        '허용 가능한 상황 : MORNING | LUNCH | DINNER | NIGHT | LATE_NIGHT | DAWN'
      );
      break;

    // 조건 유형(case): '아침'
    case MORNING:
      sendMessage = '뉴스 기사 글을 읽는다.';
      break;
    // 조건 유형(case): '점심'
    case LUNCH:
      sendMessage = '자주 가는 식당에 가서 식사를 한다.';
      break;

    // 조건 유형(case): '저녁'
    case DINNER:
      sendMessage = '동네 한바퀴를 조깅한다.';
      break;

    // 조건 유형(case): '밤'
    case NIGHT:
      sendMessage = '친구에게 전화를 걸어 수다를 떤다.';
      break;

    // 조건 유형(case): '심야'
    case LATE_NIGHT:
    // 조건 유형(case): '새벽'
    case DAWN:
      sendMessage = '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.';
  }

  console.log(sendMessage);
}); // ();

/* switch문 → if문 변환 --------------------------------------------------- */

thisTime = 'good afternoon';

let sendMessage = '';

if (thisTime === MORNING) {
  sendMessage = '뉴스 기사 글을 읽는다.';
} else if (thisTime === LUNCH) {
  sendMessage = '자주 가는 식당에 가서 식사를 한다.';
} else if (thisTime === DINNER) {
  sendMessage = '동네 한바퀴를 조깅한다.';
} else if (thisTime === NIGHT) {
  sendMessage = '친구에게 전화를 걸어 수다를 떤다.';
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  sendMessage = '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.';
} else {
  console.warn(
    '허용 가능한 상황 : MORNING | LUNCH | DINNER | NIGHT | LATE_NIGHT | DAWN'
  );
}

console.log(sendMessage);

/* switch vs. if -------------------------------------------------------- */

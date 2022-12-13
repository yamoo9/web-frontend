/* ---------------------------------------------------------------------- */
/* Don't Use Eval (Evil)                                                  */
/* ---------------------------------------------------------------------- */

let n = 9;

function dontUseEval(n) {
  eval('n = 99');
  return n;
}

let result1 = dontUseEval(7);
console.log(result1);
console.log('n = ', n);

function pleaseDontUseEval(n) {
  const evalRef = eval;
  evalRef('n = 99');
  return n;
}

let result2 = pleaseDontUseEval(7);
console.log(result2);
console.log('n = ', n);
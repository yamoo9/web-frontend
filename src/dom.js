// ES.Next Syntax
const on = (elementNode, eventType, eventListener) => {
  elementNode.addEventListener(eventType, eventListener);
  return () => elementNode.removeEventListener(eventType, eventListener);
};

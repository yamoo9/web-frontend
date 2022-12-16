const createElement = (type, props, ...children /* child1, child2, ... */) => {
  return { type, props: { ...props, children } };
};

// { type, props: { ..., children } }

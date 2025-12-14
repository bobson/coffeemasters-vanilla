window.$ = (selector, scope = document) => scope.querySelector(selector);

window.$$ = (selector, scope = document) => scope.querySelectorAll(selector);

window.on = (element, event, handler, options) =>
  element.addEventListener(event, handler, options);

window.el = (tag, props = {}, children = []) => {
  const element = document.createElement(tag);

  Object.assign(element, props);

  [].concat(children).forEach((child) => {
    element.append(
      typeof child === "string" ? document.createTextNode(child) : child
    );
  });

  return element;
};

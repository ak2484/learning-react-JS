function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("herf", reactElement.props.href);
  domElement.setAttribute("herf", reactElement.props.target);
  container.appendChild(domElement);
  */
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const key in reactElement.props) {
    domElement.setAttribute(key, reactElement.props[key]);
  }

  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    herf: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);

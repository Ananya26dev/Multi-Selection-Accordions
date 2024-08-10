const data = [
  {
    id: "1",
    question: "What is ReactJS?",
    answer:
      "ReactJS is a JavaScript library used to build reusable components for the view layer in MVC architecture. It is highly efficient and uses a virtual DOM to render components. It works on the client side and is written in JSX.",
  },
  {
    id: "2",
    question: "Explain the MVC architecture?",
    answer:
      "The Model-View-Controller (MVC) framework is an architectural/design pattern that separates an application into three main logical components Model, View, and Controller. Each architectural component is built to handle specific development aspects of an application. It isolates the business, logic, and presentation layer from each other.",
  },
  {
    id: "3",
    question: "Explain the building blocks of React?",
    answer:
      "The five main building blocks of React are:Components: These are reusable blocks of code that return HTML.JSX: It stands for JavaScript and XML and allows you to write HTML in React.Props and State: props are like function parameters and State is similar to variables.Context: This allows data to be passed through components as props in a hierarchy.Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.",
  },
  {
    id: "4",
    question: "What is JSX?",
    answer:
      "JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. All the React components are written in JSX. To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that expression in curly braces {}. Example of JSX: The name written in curly braces { } signifies JSX",
  },
];
export default data;

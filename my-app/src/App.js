// import React from 'react';
import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello, World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   }
//   return <input
//     type="text"
//     placeholder={holder}
//     style={styledField} />
// }

function Btn() {
  const text = 'log in';
  const logged = true;
  // const res = () => {
  //   return 'log in';
  // }
  // return <button>{res()}</button>
  // работает только с тернарным оператором
  return <button>{logged ? 'Enter' : text}</button>
}

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    }
    return <input
      type="text"
      placeholder={holder}
      style={styledField} />
  }
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn></Btn>
    </div>
  );
}

export default App;

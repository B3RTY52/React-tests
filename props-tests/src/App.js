import { Component } from 'react';
import './App.css';

// как работает под копотом?
// function WhoAmI(props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   )
// }

// То же самое, но более правильно:
// function WhoAmI({ name, surname, link }) {
//   return (
//     <div>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   )
// }
// В качестве пропсов можно использовать любой тип информации, 
// включая объекты и готовые функции

// Переделаем в классы:
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }

  nextYear = () => {
    console.log('+++');
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
        <br />
        <button onClick={this.nextYear}>{this.state.text}</button>
      </div >
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="Albert" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Ivanov" link="vk.com" />
    </div>
  );
}

export default App;

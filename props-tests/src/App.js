import { Component, Fragment } from 'react';
import './App.css';
import './App.scss';

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
      text: '+++',
      position: ''
    }
  }

  nextYear = () => {
    // стейт в данном случае уже приходит из свойств
    this.setState(state => ({
      // через ++инкримент не делать, тк он меняет само состояние 
      // а оно должно оставаться неизменным (меняется только сетстейтом)
      // "сетстейт" запускает перерисовку отдельного компонента
      years: state.years + 1,
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })

  }

  render() {
    const { name, surname, link } = this.props;
    const { position, years, text } = this.state;

    return (
      // Фрагмент - необязательный синтаксис, уже можно использовать и просто пустой тег <>...</>
      <Fragment>
        <h1>My name is {name},
          surname - {surname},
          age - {years},
          position - {position}</h1>
        <a href={link}>My profile</a>
        <br />
        <button onClick={this.nextYear}>{text}</button>
        <form className='form-style'>
          <span
            // по умолчанию задаются пиксели:
            style={{ fontSize: 40, color: 'red' }}
          // если нужны другие - то это делается в формате строки:
          // style={{ fontSize: '4em' }}
          >Введите должность</span>
          <input type="text" onInput={(e) =>
            this.commitInputChanges(e, 'red')} />
        </form>
      </Fragment >
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

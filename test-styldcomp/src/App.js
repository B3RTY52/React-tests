import { Component, Fragment } from 'react';

import styled from 'styled-components';
// что важного в этом пакете? 
// нет СSS классов (они не нужны), есть все те же самые фишки, 
// что и у препроцессоров, стили пишутся прямо в коде, 
// могут быть использованы как компоненты, имеют свои пропсы


import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
    a {
      color: ${props => props.active ? 'red' : 'black'};
      text-decoration: none;
      font-weight: bold;
    }
    input {
      border: 2px solid rgba(0,0,0, .2);
      margin-top: 8px;
      display: block;
    }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2)
`;

// class
class WhoAmI extends Component {
  state = {
    years: 27,
    text: '+++',
    position: ''
  }


  nextYear = () => {

    this.setState(state => ({
      years: state.years + 1,
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  // тест статика, чтобы экспортировать метод класса внутри компонента:
  static inLog = () => {
    console.log('hey hey');
  }

  // кроме функций статичными могут быть лю

  render() {
    const { name, surname, link } = this.props;
    const { position, years, text } = this.state;

    return (
      // у стайлдкомпонент есть свои пропсы (само содержание пропса см. выше):
      <EmpItem active>
        <Button onClick={this.nextYear}>{text}</Button>
        <Header>My name is {name},
          surname - {surname},
          age - {years},
          position - {position}</Header>
        <a href={link}>My profile</a>
        <form className='form-style'>
          <span
          >Введите должность:</span>
          <input type="text" onInput={(e) =>
            this.commitInputChanges(e, 'red')} />
        </form>
      </EmpItem >
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name="Albert" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Ivanov" link="vk.com" />
    </Wrapper>
  );
}

WhoAmI.inLog();

export default App;

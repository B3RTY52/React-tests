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
function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>My name is {name}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}
// В качестве пропсов можно использовать любой тип информации, 
// включая объекты и готовые функции

function App() {
  return (
    <div className="App">
      <WhoAmI name="Albert" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Ivanov" link="vk.com" />
    </div>
  );
}

export default App;

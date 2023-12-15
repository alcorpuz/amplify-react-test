import logo from './logo.svg';
import './App.css';
import PersonList from './components/personList.js';
import Cookies from 'universal-cookie';



function App() {
  const cookies = new Cookies();
  cookies.set('myCat', 'Pacman', { path: '/', domain: 'https://vvbpfl3ird.execute-api.us-east-1.amazonaws.com', sameSite: 'none', secure: true,});
  console.log(cookies.get('myCat')); // Pacman

  return (
    <div ClassName="App">
      <PersonList/>
    </div>
  )
}


export default App;

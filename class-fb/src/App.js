import logo from './logo.svg';
import './App.css';
import './bootstrap-icons.css'
import Header from './Header/Header';
import Left from './Left/Left';
import Middle from './Middle/Middle';
import Right from './Right/Right';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='All'>
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
}

export default App;

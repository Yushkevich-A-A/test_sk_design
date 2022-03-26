import DropdownList from 'components/molecules/DropdownList';
import './App.css';
// import Button from './components/atoms/Button';
// import Input from './components/atoms/Input';
import Fieldset from './components/molecules/FildsetInput';
import cities from './assets/JSONData/cities.json';

function App() {
  console.log(cities);
  
  return (
    <div className="App">
      <div className="test-mode">
        <Fieldset />
      </div>
      <div className="test-mode">
        // <DropdownList list={cities}/>
      </div>
    </div>
  );
}

export default App;

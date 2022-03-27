import DropdownList from 'components/molecules/DropdownList';
import './App.css';
// import Button from './components/atoms/Button';
// import Input from './components/atoms/Input';
import Fieldset from './components/molecules/FildsetInput';
import FildsetDropdown from 'components/molecules/FildsetDropdown';

function App() {
  
  return (
    <div className="App">
      <div className="test-mode">
        <Fieldset />
      </div>
      <div className="test-mode">
        <FildsetDropdown/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Form from "./components/form/Form.jsx"
import Navbar from './components/navbar/Navbar.jsx';
import NumberInput from './components/number-input/NumberInput.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Form/>

      <NumberInput/>
    </div>
  );
}

export default App;

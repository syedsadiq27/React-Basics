import logo from './logo.svg';
import './App.css';
import Component1 from './components/navigation/Component1';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome name="Sadiq" age="50" />
      <Welcome name="Soundharya" />
      <Welcome name="Anusha" />
      <Hello name="Anusha" />

    </div>
  );
}

export default App;

import './App.css';
import Messages from './components/Messages';
import NavbarCard from './components/NavbarCard';

function App() {
  return (
    <div >
          <header className="App-header">
                <NavbarCard/>
            </header>
      <Messages></Messages>
    </div>
    
  );
}

export default App;

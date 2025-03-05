import logo from './logo.svg';
import { QuinielasProvider } from './components/context/QuinielasContext'
import Quinielas from './components/Quinielas';

function App() {
  return (
      <QuinielasProvider>
        <Quinielas/>
      </QuinielasProvider>
  );
}

export default App;

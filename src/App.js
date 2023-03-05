import './App.css';
import Container from './component/Container';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Container/>
    </WeatherProvider>
  );
}

export default App;

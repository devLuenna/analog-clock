import './App.css';
import Clock from './components/clock';

export default function App() {
  const time = new Date();
  return (
    <div className="app">
      <Clock time={time} />
    </div>
  );
}

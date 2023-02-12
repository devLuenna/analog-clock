import './App.css';
import Clock from './components/clock';

export default function App() {
  const today = new Date();
  const time = {
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds(),
  };
  return (
    <section className="app">
      <Clock time={time} />
    </section>
  );
}

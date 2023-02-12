import './App.css';
import { useEffect, useState } from 'react';
import Clock from './components/clock';

export default function App() {
  const [date, setDate] = useState(new Date());

  const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="app">
      <Clock time={time} />
    </section>
  );
}

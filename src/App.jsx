import './App.css';
import { useEffect } from 'react';
import Clock from './components/clock';
import { DateProvider, useDateContext } from './contexts/date.provider';

const ClockPage = () => {
  const { date, setDate } = useDateContext();

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
    <section className="clock-container">
      <Clock time={time} />
    </section>
  );
};

export default function App() {
  return (
    <DateProvider>
      <ClockPage />
    </DateProvider>
  );
}

import { createContext, useContext, useMemo, useState } from 'react';

const DateContext = createContext(undefined);

export const DateProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());

  const value = useMemo(
    () => ({
      date,
      setDate,
    }),
    [date, setDate],
  );

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export const useDateContext = () => useContext(DateContext);

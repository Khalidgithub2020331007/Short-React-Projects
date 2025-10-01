import React, { useContext } from 'react';
import { CountContext } from '../../App';

const LastNavBar = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="bg-red-600 p-4">
      <h1>NavBar Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase from NavBar</button>
    </div>
  );
};

export default LastNavBar;

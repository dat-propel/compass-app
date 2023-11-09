import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');

  const requestApi = useCallback(async () => {
    const response = await axios.get(
      'https://compass-backend-dot-steel-apparatus-404601.as.r.appspot.com/WeatherForecast',
    );
    if (response) {
      setData(JSON.stringify(response.data));
    }
  }, []);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={requestApi}>call api</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p id='response'>{data}</p>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

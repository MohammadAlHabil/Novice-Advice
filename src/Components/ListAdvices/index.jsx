import './ListAdvices.css';
import { useEffect, useState } from 'react';
import AdviceCard from './../AdviceCard';

export default function ListAdvices() {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`https://api.adviceslip.com/advice/search/w`, {
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => setAdvices(data.slips))
      .catch(console.log);

    return () => abortController.abort();
  }, []);

  return (
    <div className="container">
      <ul className="ListAdvices">
        {advices.map((advice, index) => {
          return <AdviceCard key={index} advice={advice} />;
        })}
      </ul>
    </div>
  );
}

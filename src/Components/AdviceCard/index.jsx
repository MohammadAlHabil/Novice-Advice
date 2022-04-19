import './AdviceCard.css';

export default function AdviceCard({ advice }) {
  return <li className="ListAdvices-item">{advice.advice}</li>;
}

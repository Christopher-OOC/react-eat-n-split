import "./index.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [youLike, setYouLike] = useState(0);
  const [yourFriendLike, setYourFriendLike] = useState(0);

  const average = (youLike + yourFriendLike) / 2;
  const tip = (average / 100) * bill;
  const total = bill + tip;

  function handleReset() {
    setBill(0);
    setYouLike(0);
    setYourFriendLike(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <ServiceInput like={youLike} setLike={setYouLike}>
        How did you like the service?
      </ServiceInput>
      <ServiceInput like={yourFriendLike} setLike={setYourFriendLike}>
        How did your friend like the service?
      </ServiceInput>
      {bill !== 0 && (
        <h2>
          You pay ${total} (${bill} + ${tip} tip).
        </h2>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceInput({ like, setLike, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={like} onChange={(e) => setLike(Number(e.target.value))}>
        <option value="0">Disatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

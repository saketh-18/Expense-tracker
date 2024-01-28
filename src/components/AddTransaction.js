import React , { useContext , useState} from 'react';
import { GlobalContext } from '../context/GlobalContext';


export default function AddTransaction() {
  const [text , setText] = useState("");
  const [amount , setAmount ] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  function handlesubmit(e) {
    e.preventDefault();

    const newTrans = {
      id : (Math.random() * 1000000) , 
      text ,
      amount : +amount ,
    }

    addTransaction(newTrans);
  }

  return (
    <>
    <h3>Add new transaction</h3>
      <form id="form" onSubmit={handlesubmit}>
        <div className="form-control">
          <label htmlForfor="text">Text</label>
          <input type="text" id="text" onChange={(e) => { setText(e.target.value)}} value = {text} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." value = {amount} onChange={(e) => { setAmount(e.target.value)}}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

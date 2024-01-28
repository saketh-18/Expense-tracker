import React, { useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';



export default function IncomeExpenses() {
  const {transaction} = useContext(GlobalContext);

  const [income , setIncome] = useState(0);
  const [expense , setexpense] = useState(0);

  let countp = 0;
  let countn = 0;

  function forIncome(){ 
    for (var i = 0; i < transaction.length ;i++) {
      if(transaction[i].amount > 0){ 
        countp += transaction[i].amount;
      } 
    }
    setIncome(countp);
  }

  function forExpense() {
    for (var j = 0; j < transaction.length ;j++) {
      if(transaction[j].amount < 0){ 
        countn += transaction[j].amount;
      }
    }

    setexpense(countn);
  }

  function updateExpense(){ 
    //for updating income
    forIncome();

    //for updating expense
    forExpense();
  }

  useEffect(() => {
    updateExpense();
  } ,);
     
  return (
    <>

     <div className="inc-exp-container">
<div>
  <h4>Income</h4>
  <p id="money-plus" className="money plus">{income}</p>
</div>
<div>
  <h4>Expense</h4>
  <p id="money-minus" className="money minus">{expense}</p>
</div>
</div>
</>
  )
}

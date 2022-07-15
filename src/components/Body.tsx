import React, { ChangeEvent, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext';




export const Body = () => {

    const [myInput, setMyInput] = useState(0);
    const [tip, setTip] = useState(0);

    const { transactions, addTransactions, delTransactions } = useGlobalContext();

    const amount: number[] = transactions.map( (eachTrans) => eachTrans.amount )

    const totalAmount: number = amount.reduce( (total, item) => ( total += item ), 0 )
    const tax: number = 0.00625 * totalAmount;
    const totalAfterTip = totalAmount + tax

    const triger = (e: ChangeEvent<HTMLInputElement>) => {
        setMyInput(+e.target.value);
      }

    const addItems = () => {
        addTransactions(myInput)
        setMyInput(0)
    }

    return (
        <>
            <input value={ myInput } onChange={ triger } type="number"></input>
            <button onClick={ addItems }> Add items </button>
            <h3>Total: {totalAmount}</h3>
            <h3>Tax: { tax } </h3>
            <h3>Total After Tax { totalAfterTip } </h3>
            <input value={tip} onChange={(e) => setTip(+e.target.value)} placeholder='Enter the tip % like 2,3,5'></input>
            <h1>Total After Tip: {(tip * 0.01 * totalAmount) + totalAfterTip}</h1>
            <ul className='list'>
            {
                transactions.map(
                    (eachTrans => 
                    <>
                    <li><span>Item id-{eachTrans.id} : ${eachTrans.amount}</span> <button onClick={() => delTransactions(eachTrans)} className="del-btn"> X </button> </li>
                    
                    </>
                    )
                )
            }
            </ul>
        </>
    )
}


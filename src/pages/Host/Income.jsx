import React from "react"
import { requireAuth } from "../../utils"
import graph from "../../assets/graph.png"

export async function loader({request}){
    await requireAuth(request)
    return null
}

export default function Income(){

    const transactions = [
        { id:1, amount:720, date:"1/22/22"},
        { id:2, amount:560, date:"10/11/22"},
        { id:3, amount:980, date:"23/11/22"}
    ]

    const displayTransactions = transactions.map(data => (
        <div key={data.id} className="record">
            <h2 className="record-amount">${data.amount}</h2>
            <p className="record-date">{data.date}</p>
        </div>
        
    ))
    return(
        <main className="income-page">
            <section className="income-page-details">
                <h1 className="income-text">Income</h1>
                <h4 className="income-history-text">Income last <span className="income-history-days">30 days</span></h4> 
                <h2 className="income--amount">$2,260</h2>
            </section>
            <section className="graph">
                <img className="graph-image" src={graph} alt="" />
            </section>
            <section className="transactions">
                <div className="transaction-history">
                    <h2>Your transactions<span>({transactions.length})</span></h2>
                    <h4 className="income-history-text incomepage-history-text">Last <span className="income-history-days">30 days</span></h4>
                </div>
                <div className="transaction-records">
                    {displayTransactions}
                </div>
               
            </section>
        </main>
    )
}
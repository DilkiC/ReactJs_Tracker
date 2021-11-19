import React from 'react';

function ListItem({income,index,removeIncome}) {

let date=new Date(income.date);
  let day=date.getDate();
  let month=date.getMonth()+1;
  let year=date.getFullYear();

  const removeHandle = i=>{
    removeIncome(i);
  }


    return (
        <div className="income-item">
      <button className="remove-item" onClick={()=>removeHandle(index)}>
      x
      </button>
      <div className="desc">{income.desc}</div>
      <div className="price">Rs. {income.price}</div>
      <div className="date">{month + "/" +day+"/"+year}</div>
      
    </div>
    )
}

export default ListItem;

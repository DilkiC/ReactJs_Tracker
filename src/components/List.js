import React from 'react';
import ListItem from './ListItem';

function List({income, setIncome}) {

    const removeIncome= i =>{
        let temp = income.filter((v,index)=>index != i);
        setIncome(temp);
      }

      const sortByDate=(a,b)=>{
        return a.date-b.date;
      }

    return (
        <div className="income-list">
            {
        income.sort(sortByDate).map((value,index)=>(
          <ListItem 
          key={index}
          income={value}
          index={index}
          removeIncome={removeIncome}
          />
        ))
      }

            
        </div>
    )
}

export default List;

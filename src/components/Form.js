import React, {useRef} from 'react';

function Form(income,setIncome) {

const desc=useRef(null);
const date=useRef(null);
const price=useRef(null);

const AddIncome = x =>{
    x.preventDefault();
    let d=date.current.value.split("_");
    let newD=new Date(d[0],d[1],d[2]);
    setIncome([...income,{
      "desc":desc.current.value,
      "price":price.current.value,
      "date":newD.getTime()
    }
    ]);

    desc.current.value="";
    price.current.value="";
    date.current.value="";
}

    return (
        <form className="income-form" onSubmit={AddIncome}>
        <div className="form-inner">

        <input type="text" name="desc" id="desc" placeholder="Description" ref={desc}/>
        <input type="number" name="price" id="price" placeholder="Price" ref={price}/>
        <input type="date" name="date" id="date" placeholder="Date" ref={date}/>
        <input type="submit" id="add" value="Add Income"/>
        

      </div>
      
    </form>
    )
}

export default Form;

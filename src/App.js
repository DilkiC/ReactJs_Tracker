import React,{useEffect,useState} from 'react';
import "./App.css";
import background from "./assets/money.jpg";
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [income,setIncome]=useState([]);
  const [totalIncome,setTotalIncom]=useState(0);
    
    useEffect(()=>{
      let temp=0;
      for(let i=0;i<income.length;i++){
        temp+=parseInt(income[i].price);
      }
      setTotalIncom(temp)
    },[income]);


  return (
    <div /* style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition:'center', 
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(52, 52, 52, 0.8)'
    }} */>
      
      <Header totalIncome={totalIncome}></Header>
      <Form income={income} setIncome={setIncome}></Form>
      <List income={income} setIncome={setIncome}></List>

      
    </div>
  )
}

export default App;



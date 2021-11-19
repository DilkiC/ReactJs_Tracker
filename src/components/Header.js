import React from 'react';

function Header({totalIncome}) {
  return (
    <header >
      <h1 className="title">Income Tracker</h1>

      <div className="total-income">Ru. {totalIncome}

      </div>
      
    </header>
  )
}

export default Header;


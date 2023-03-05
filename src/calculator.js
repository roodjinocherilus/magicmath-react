import './calculator.css';
import React, { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="calculator">
      <div className="display">
        {state.next || state.total || '0'}
      </div>
      <div className="buttons">
        <button type="button" className="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" className="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" className="button" onClick={() => handleClick('%')}>%</button>
        <button type="button"  className="button operation yellow" onClick={() => handleClick('÷')}>/</button>
        <button  type="button" className="button" onClick={() => handleClick('7')}>7</button>
        <button type="button"  className="button" onClick={() => handleClick('8')}>8</button>
        <button type="button"  className="button" onClick={() => handleClick('9')}>9</button>
        <button type="button"  className="button operation yellow" onClick={() => handleClick('x')}>x</button>
        <button  type="button" className="button" onClick={() => handleClick('4')}>4</button>
        <button type="button"  className="button" onClick={() => handleClick('5')}>5</button>
        <button  type="button" className="button" onClick={() => handleClick('6')}>6</button>
        <button type="button"  className="button operation yellow" onClick={() => handleClick('-')}>-</button>
        <button type="button"  className="button" onClick={() => handleClick('1')}>1</button>
        <button type="button"  className="button" onClick={() => handleClick('2')}>2</button>
        <button  type="button" className="button" onClick={() => handleClick('3')}>3</button>
        <button  type="button" className="button operation yellow" onClick={() => handleClick('+')}>+</button>
        <button type="button"  className="button zero two-column" onClick={() => handleClick('0')}>0</button>
        <button type="button"  className="button" onClick={() => handleClick('.')}>.</button>
        <button type="button"  className="button operation yellow" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;

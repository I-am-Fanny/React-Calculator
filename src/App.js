import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import Logo from './components/Logo';
import React from 'react';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  
  const[input,setInput] = useState('');
  
  const addInput = (value)=> {
    setInput(input + value);
  };

  const calculateResult = () =>{
    if(input === ''){
      alert('Please, add values to make calculations');
    }else{
      setInput(evaluate(input));
    }
  };

  return (
    <div className='App'>
      <Logo/> 
      <div
      className='calculator-container'>
        <Screen display={input}/>

        <div className='fila'>
          <Button driveClick={addInput}>1</Button>
          <Button driveClick={addInput}>2</Button>
          <Button driveClick={addInput}>3</Button>
          <Button driveClick={addInput}>+</Button>
        </div>

        <div className='fila'>
        <Button driveClick={addInput}>4</Button>
        <Button driveClick={addInput}>5</Button>
        <Button driveClick={addInput}>6</Button>
        <Button driveClick={addInput}>-</Button>
        </div>

        <div className='fila'>
        <Button driveClick={addInput}>7</Button>
        <Button driveClick={addInput}>8</Button>
        <Button driveClick={addInput}>9</Button>
        <Button driveClick={addInput}>*</Button>
        </div>

        <div className='fila'>
        <Button driveClick={calculateResult}>=</Button>
        <Button driveClick={addInput}>0</Button>
        <Button driveClick={addInput}>.</Button>
        <Button driveClick={addInput}>/</Button>
        </div>

        <div className='fila'>
          <ClearButton driveClear={()=> setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

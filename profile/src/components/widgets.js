import React, {useState} from 'react';
import styled from 'styled-components';


const WidgetDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    body {
        background-color: rgb(244, 244, 244);
        color: rgb(65, 75, 60);
        font-family: 'Bitter', serif;
    }
    h2 {
        transform-origin: center left;
        margin-bottom: 2%;
    }
    p {
      margin-top: -2%;
      color: rgba(35, 35, 35, 0.5);
    }
    button, input {
        margin: 3px;
        color: #7a6a6a;
        border: 1px solid rgb(210, 210, 210);
        border-radius: 3px;
        height: 1.8em;
    }
    .container {
        min-height: 150px;
        background-color: white;
        margin: 2%;
        padding: 3.5%;
        border: 5px solid rgb(210, 210, 210);
        box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%;
        align-items: center;
    }

    #spinner{
        justify-content: center;
        margin-top: 15px;
        width: 60px;
    }

    @keyframes rotate {
        to {
            transform-origin: center;
            transform: rotate(360deg)
        }
    }
    .spinner {
        margin: 5%;
        display: flex;
        align-items: center;
        animation: rotate 1s linear forwards infinite;
        transform-origin: center;
        caret-color: transparent;
    }
    .squares {
        display: grid;
        grid-template-columns: 50px 50px;
        grid-template-rows: 50px 50px; 
        column-gap: 10px;
        row-gap: 10px;
        caret-color: transparent;

        .square {
            justify-self: stretch;
            border: 2px dashed black;
            cursor: pointer;

            &.active {
                background-color: lightgreen;
                border: 3px solid black;
            }
        }
    }

`

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  };
  const decrement = () => {
    setCount(count-1)
  };
  const reset = () => {
    setCount(0)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: (count%2 === 0 ? 'royalblue' : 'crimson')
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <p>Is it even?</p>
      <div id='count' style={style}>
        Number {count} is {(count%2 === 0 ? 'even' : 'odd')}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

function Spinner() {
    const [spinnerOn, setSpinnerOn] = useState(true);
    const toggleSpinner = () => {
        setSpinnerOn(!spinnerOn)
    };

    return (
        <div className='widget-spinner container'>
            <h2>Spinner</h2>
            <button id='toggleSpinner' onClick={toggleSpinner}>
                {(spinnerOn ? 'Hide Spinner' : 'Show Spinner')} 
            </button>
            <div className='showingOff'>
                {
                    spinnerOn && <div id='spinner' className='spinner'>--+--</div> 
                }
            </div>
            
        </div>
    );
}

function Input() {
    const [inputValue, setInputValue] = useState('')
  
    const changeInput = evt => {
      const { value } = evt.target;
      setInputValue(value)
    };

    const reset = () => {
      setInputValue('')
    };
  
    const style = {
      fontSize: '1.5em',
      marginBottom: '0.3em',
      color: ((inputValue.length < 11) ? 'crimson' : 'royalblue'), 
    };
  
    return (
      <div className='widget-input container'>
        <h2>Input</h2>
        <p>Minimum 10 Characters</p>
        <div id='output' style={style}>{inputValue.toUpperCase()}</div> 
        <div>
          <input id='input' type='text' onChange={changeInput} value={inputValue} /> 
          <button id='resetInput' onClick={reset}>Reset</button>
        </div>
      </div>
    );
}

function Squares() {
    const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];
    const [squares] = useState(listOfSquareIds)
    const [activeSquare, setActiveSquare] = useState(null)
  
    const getClassName = id => {
      return (id === activeSquare ? 'active' : '')
    };
  
    const markActive = id => {
      activeSquare === id ? setActiveSquare(null) : setActiveSquare(id)
    };
  
    return (
      <div className='widget-squares container'>
        <h2>Squares</h2>
        <p>There can only be one @_@</p>
        <div className='squares'>
          {
            squares.map(id =>
              <div
                id={id}
                key={id}
                className={`square ${getClassName(id)}`}
                onClick={() => markActive(id)}
              >
              </div>
            )
          }
        </div>
      </div>
    );
}

export default function Widgets(){
    return(
        <div className='widgets'>
            <WidgetDiv>
                <Counter />
                <Spinner />
                <Input />
                <Squares />
            </WidgetDiv>
        </div>
    )
}


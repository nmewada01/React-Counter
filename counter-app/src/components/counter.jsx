import React from "react";
const Counter = (props) => {
  const [count, setCount] = React.useState(props.initialValue);
  return (
    <div >
      <h1 style={count%2===0 ? {color:'green'} : {color:'red'}}>Counter App: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button  onClick={()=> setCount(count*2)}>double</button>
    </div>
  );
};

export default Counter;

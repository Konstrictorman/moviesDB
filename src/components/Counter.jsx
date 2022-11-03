import React, { useState } from "react";

export const Counter = () => {
   const [counter, setCounter] = useState(0);

   const add = () => {
      setCounter(counter+1);
   }

   const remove = () => {
      setCounter(counter-1);
   }

   const reset = () => {
      setCounter(0);
   }

   return (
      <div>
         <button onClick={add}>Add</button>
         <button onClick={remove}>Remove</button>
         <button onClick={reset}>Reset</button>
         Counter: {counter}
      </div>
   );
}
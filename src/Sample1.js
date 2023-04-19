import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, div, mul, sub } from './Slice2';

function Sample1() {
    const Sample2=useSelector((state) =>state.counter2.result)
  const dispatch=useDispatch();
  
  return (
    <div>
        <h1>{Sample2}</h1>
        <button onClick={()=>dispatch(add())}>add</button>
        <button onClick={()=>dispatch(sub())}>sub</button>
        <button onClick={()=>dispatch(mul())}>mul</button>
        <button onClick={()=>dispatch(div())}>div</button>
    </div>
  )
}

export default Sample1
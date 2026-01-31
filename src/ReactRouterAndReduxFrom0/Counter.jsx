import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, dicrement, incrimentByAmount } from '../reduxToolKit/slices/counterSlice'

function Counter() {
    const reduxState = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(reduxState)
    return (
        <>
            <div>Vlaue: {reduxState.count.count}</div>
            <button onClick={()=>{dispatch(increment())}}>increment</button>
            <button onClick={()=>{dispatch(dicrement())}}>dicrement</button>
            <button onClick={()=>{dispatch(incrimentByAmount(2))}}>incrementByAmount</button>
        </>
    )
}

export default Counter
import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";


const Counter = () =>{

    const count = useSelector((state) => state.counter.value);
    const dispatch=useDispatch();

    return (
        <div className="w-content h-[36px] flex justify-center items-center  gap-5  bg-white p-8 rounded-lg fon">
            <button className= "border-r-4 border-[#bfbfbf] pr-5 rounded-sm font-bold "
            onClick={()=>dispatch(decrement())}
            >
                Decrement
            </button>
            <br/>
            <br/>        
            <div className=" font-semibold">{count}</div>
            <br></br>
            <button className= "border-l-4 border-[#bfbfbf] rounded-sm pl-5 font-bold"
            onClick={ ()=> dispatch(increment())}
            >
                Increment
            </button>
        </div>
    )
}

export default Counter;
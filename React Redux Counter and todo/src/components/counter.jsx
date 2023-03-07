import { useDispatch,useSelector } from "react-redux";
function Counter () {
    const dispatch = useDispatch();

    const Increase = () => {
        dispatch({
            type:"INCREMENT",
            payload:1
        })
    }
    const Decrement = () => {
        dispatch({
            type:"DECREMENT",
            payload:2
        })
    }
    const data = useSelector((storedata) => {
        return storedata.cReducer.count;
    })
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Your count value is : {data}</h3>
            <button onClick={Increase}>Increse</button>&nbsp;&nbsp;
            <button onClick={Decrement}>Decrese</button>
        </div>
    )
}
export default Counter;
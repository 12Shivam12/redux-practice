import { useSelector } from "react-redux";
function Todolist(){
    let data = useSelector((storedata) => {
        // console.log(storedata);
        return storedata.todoReducer.todo
    })
    return(
        <div>
            <h2>Todo List</h2>
            {
            data.map((ele,ind) =>{
               return <p key ={ind+1}>{ele}</p>
            })   
            }
        </div>
    )
}
export default Todolist;
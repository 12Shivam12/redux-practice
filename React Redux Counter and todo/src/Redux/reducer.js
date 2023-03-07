const myReducer = (state={todo:[]},action) => {
    
    switch(action.type){
        case "todo":
            return{
                ...state,
                todo:[...state.todo,action.payload]
            }
            break;
            default:
                return state;
    }

}
export default myReducer;
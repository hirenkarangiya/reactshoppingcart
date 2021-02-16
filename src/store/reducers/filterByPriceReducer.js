const initialState = {
    filterbyprice: [1000, 50000]
}

const filterbypriceReducer = (state = initialState, action) => {
    

    if(action.type === "FILTER_PRICE"){
        return{
            ...state,
            filterbyprice: action.value
        }
    }

    return state;
}

export default filterbypriceReducer;
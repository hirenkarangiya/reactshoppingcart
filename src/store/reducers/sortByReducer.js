const initialState = {
    sortby: 'hightolow'
}

const sortbyreducer = (state = initialState, action) => {

    if(action.type === "SORT_BY"){
        return{
            ...state,
            sortby: action.value
        };
    }

    return state;
}

export default sortbyreducer;
const LinkReducer = (state,action) =>{
    switch(action.type){

        case "SHORT_URL" :
            return {
                ...state,
                links :[action.payload, ...state.links]
            }

            case "REMOVE_URL" :
            return   {
                ...state,
                links : state.links.filter((item) => item.id !== action.payload)
            }

        default:
            return state;
    }

}

export default LinkReducer
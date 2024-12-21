import { createContext, useReducer } from "react";
import LinkReducer from "./LinkReducer";

const LinkContext = createContext()


const initialState = {
    links : []
}

// Provider
export const LinkProvider = ({children}) =>{



// Reducer
const [state,dispatch] = useReducer(LinkReducer,initialState)





    return(
        <LinkContext.Provider value={{...state,dispatch
        }}>
        {children}
        </LinkContext.Provider>
    )
}

export default LinkContext
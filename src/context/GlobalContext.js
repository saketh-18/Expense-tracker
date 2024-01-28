import React , { createContext ,useReducer } from "react";
// import AddTransaction from "../components/AddTransaction";
const initialState = {
    transaction:  [] ,
}
export const GlobalContext = createContext(initialState);



function AppReducer(state , action){ 
    switch (action.type) {
        case "add" : {
            return (
                {
                    ...state , transaction : [...state.transaction , action.payload]
                }
            )
        }
        case "delete" : {
            return (
                {
                    ...state , transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
                }
            )
        }
        default :
        return (
            state
        )
    }
}

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialState);

    function addTransaction(transaction){
        dispatch({
            type : "add" ,
            payload : transaction ,
        })
    }

    function deleteTransaction(id) {
        dispatch({
            type: "delete" ,
            payload : id ,
        })
    }

    return (
        <GlobalContext.Provider value={{transaction:  state.transaction , addTransaction , deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
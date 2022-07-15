import { createContext, useContext, useReducer } from "react";
import { actionType, GlobalContextType, GlobalContextWrapperProps, StateTransactionType, TransactionType } from "../components/TypoFile";
import { MyReducer } from "./MyReducer";


const initialState: StateTransactionType = {
    transactions: []
}

var tID = 0;

const GlobalContext = createContext({} as GlobalContextType)

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalContextWrapper = ({ children }: GlobalContextWrapperProps) => {

    const [ state, dispatch ] = useReducer(MyReducer, initialState);

    function addTransactions(thisAmt: number) {
        tID++;
        const newItem: TransactionType = {
            id: tID,
            amount: thisAmt
        }
        dispatch({
            type: actionType.ADD,
            payload: newItem
         })       
    }

    function delTransactions(thisTrans: TransactionType) {
        dispatch({
            type: actionType.DEL,
            payload: thisTrans
         })       
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                addTransactions,
                delTransactions
            }
            }
        >
            {children}
        </GlobalContext.Provider>
    )

}
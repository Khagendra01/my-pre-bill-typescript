import { ReactNode } from "react"

export type GlobalContextType = {
    transactions: TransactionType[],
    addTransactions: ( thisAmt: number )=> void,
    delTransactions: ( thisTrans: TransactionType )=> void
}

export type GlobalContextWrapperProps = {
    children: ReactNode
}

export type TransactionType = {
    id: number,
    amount: number
}

export type StateTransactionType = {
    transactions: TransactionType[]
}

export enum actionType{
    ADD = "add",
    DEL = "del"
  }

export type myAction = {
    type: string,
    payload: TransactionType
}
import { actionType, myAction, StateTransactionType } from "../components/TypoFile";

export const MyReducer = (state: StateTransactionType, action: myAction): any => {
  const { type, payload } = action;
  switch (type) {
    case actionType.ADD:
      return { ...state, transactions: [payload, ...state.transactions] }
    case actionType.DEL:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== payload.id)
      }

  }
}
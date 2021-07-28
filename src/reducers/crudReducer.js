import { TYPES } from "../actions/crudActions";
// Define initial state
export const initialState = {
    database: null
}
export function crudReducer(state, action) {
    const database = state.database
    switch (action.type) {
        case TYPES.CREATE_DATA:
            console.log("here is databse", database)
            return { ...state, database: [...state.database, action.payload] }
        case TYPES.UPDATE_DATA:
            let newData = database.map((item) => {
                // item.id === updatedItem.id ? updatedItem : item Option #1
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
            return { ...state, database: newData }
        case TYPES.READ_ALL_DATA:
            // console.log(action.payload) // payload contains fetch res
            return { ...state, database: action.payload.map((item) => item) }
        case TYPES.READ_ONE_DATA:

            break;
        case TYPES.DELETE_DATA:
            console.log("Deleting this:", action.payload)
            // Filter "Database" to avoid the clicked item
            let newDatabase = database.filter((item) => item.id !== action.payload)
            return { ...state, database: newDatabase }
        case TYPES.NO_DATA:
            return initialState;
        default:
            return state

    }
}
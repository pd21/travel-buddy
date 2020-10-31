import items from '../initial-state'

const allReducer = (state= items,action) => {
    if (action.type === 'ADD-NEW-ITEM') {
        const items = [
            ...state.items,
            action.payload,
        ]
  
        state = {
            items: items
        }

        return state

    }

    if (action.type === 'REMOVE-ITEM'){
        let items = state.items.filter(x => x.id !== action.id)

        state = {
            items
        }
        return state
    }

    if (action.type === 'TOGGLE-ITEM'){
        let items = state.items.map(x => {
           if(x.id === action.id){
               x.packed = !x.packed
           }
           return x
        })
        state = {
            items
        }
        return state
    }

    if (action.type === 'MARK-UNPACKED'){
        let items =  state.items.map(x => {
            x.packed = false
            return x
        })
        state = {
            items
        }
        return state
    }
   
    return state
}


export default allReducer
import items from '../initial-state'

const allReducer = (state= items,action) => {
    if (action.type === 'ADD-NEW-ITEM') {
        const items = [
            ...state.items,
            action.payload,
        ]
        return  {
          items
        }

    }

    if (action.type === 'REMOVE-ITEM'){
        let items = state.items.filter(x => x.id !== action.id)

        return {
            items
        }
    }

    if (action.type === 'TOGGLE-ITEM'){
        let items = state.items.map(x => {
           if(x.id === action.id){
               x.packed = !x.packed
           }
           return x
        })
        
        return {
            items
        }
    }

    if (action.type === 'MARK-UNPACKED'){
        let items =  state.items.map(x => {
            x.packed = false
            return x
        })
        return {
            items
        }
    }
   
    return state
}


export default allReducer
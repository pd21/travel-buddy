import uniqueId from 'lodash/uniqueId'

export const addItem = (value) => {
    return {
        type: 'ADD-NEW-ITEM',
        payload: {
            value,
            id: uniqueId(),
            packed: false
        }
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE-ITEM',
        id
    }
}

export const toggleItem = (id) => {
    return {
        type: 'TOGGLE-ITEM',
        id
    }
}

export const markUnpacked = () => {
    return{
        type: 'MARK-UNPACKED'
    }
}
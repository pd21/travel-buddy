import { removeItem, toggleItem} from '../actions/newitemaction'

import { useDispatch } from 'react-redux'

import {
    ItemContainer,
    Remove,
    List
} from './style'

function Item(props){
  const dispatch = useDispatch()  
  const {item} = props  

  return(
      <ItemContainer>
          <input type="checkbox" checked={item.packed} onChange={()=> dispatch(toggleItem(item.id))}/>
          <List>{item.value}</List>
          <Remove onClick={() => dispatch(removeItem(item.id))}> Remove </Remove>
      </ItemContainer>
  )
}

export default Item
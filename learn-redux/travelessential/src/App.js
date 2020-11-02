import './App.css';
import NewItem from './components/NewItem'
import Items from './components/Items'
import {
  MarkAllAsUnpacked,
  Title
} from './components/style'

import { useSelector, useDispatch } from 'react-redux'

import { markUnpacked } from './actions/newitemaction'

function App() {
  const items =  useSelector(state => state.items)
  const unpackedItems = items.filter(x => !x.packed)
  const packedItems = items.filter(x => x.packed)  

  const dispatch = useDispatch()
  return (
    <div className="App">
      <Title>Happy Travel !</Title>
      <NewItem/>
      <Items unpackedItems={unpackedItems}/>
      <Items packedItems={packedItems} />
      <MarkAllAsUnpacked onClick={() => dispatch(markUnpacked())}> MarkAllAsUnpacked </MarkAllAsUnpacked>
    </div>
  );
}

export default App;

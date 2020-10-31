import Item from './Item'

function Items(props){

    const label = props.unpackedItems ? 'Unpacked Items' :'Packed Items'
    const requiredProps = props.unpackedItems ? props.unpackedItems : props.packedItems

    return (
        <div>
            {requiredProps &&
               <div>
                <h2>{label} ({requiredProps.length})</h2>
                {requiredProps.map(item=> {
                        return(
                            <Item item={item} />
                        )
                    })
                }
                </div>
            }        
        </div>
    )
}

export default Items
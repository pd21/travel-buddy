import { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../actions/newitemaction'

import {
    Input,
    Submit
} from './style'

function NewItem() {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const handleChange  = (event) => {
        setValue(event.target.value)
    }

    const onSubmit = () => {
        dispatch(addItem(value))
        setValue('')
    }

    const handleEnter = (e) => {
        if(e.keyCode == 13){
            dispatch(addItem(value))
            setValue('')
        }
    }

    useEffect(() => {
        // Update the document title using the browser API
        // console.log("use effect called ", value);
       
    }, [value]);


    return (
        <div>
            <Input type="text" value={value} onChange={(e) => handleChange(e)} onKeyDown={e => handleEnter(e)}/>
            <Submit onClick={onSubmit}>Add new</Submit>
        </div>
    )
}

export default NewItem
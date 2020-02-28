import React, { useContext, useReducer } from 'react'
import Button from './Button'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'

const CustomizeIconsPanel = () => {
  const value = useContext(EosIconStore)

  const [state, dispatch] = useReducer(iconsReducer, value)
  console.log('APP STATE', state)
  const selectAll = e => {
    e.preventDefault()
    return dispatch({
      type: 'ADD_ALL_ICONS'
    })
  }
  // const [count, setCount] = useState(0)

  return (
    <div className='icons-picker-footer'>
      <h6 className='select-all-icons' onClick={selectAll}>
        Select all <i className='eos-icons'>select_all</i>
      </h6>
      <h6 className='deselect-all-icons' onClick={''}>
        Deselect all <i className='eos-icons'>clear</i>
      </h6>
      <div className='generate-div'>
        <h6>0 icons selected</h6>
        <Button primary type='submit' onClick={''}>
          Generate font
        </Button>
      </div>
    </div>
  )
}

export default CustomizeIconsPanel

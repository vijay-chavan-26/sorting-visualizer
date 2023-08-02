import React, { createContext } from 'react'
import { useState } from 'react'

export const ArrContext = createContext()
const Context = (props) => {
    const [arr, setArr] = useState() // for getting size of array 
    const [finalArr, setFinalArr] = useState([]) // for generating n size of random array
    const [buttonClick, setButtonClick] = useState(false) // for generating n size of random array after clicking button
  return (
    <>
        <ArrContext.Provider value={{arr,setArr,finalArr,setFinalArr,buttonClick,setButtonClick}}>
            {props.children}
        </ArrContext.Provider>
    </>
  )
}

export default Context
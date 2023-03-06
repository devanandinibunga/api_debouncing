import React from 'react'

export const ApiCalling3 = ({delayedFetchWithDebounce,url3}) => {


  return (
    <button onClick={()=>delayedFetchWithDebounce(url3,3000)}>Click me 3</button>
  )
}

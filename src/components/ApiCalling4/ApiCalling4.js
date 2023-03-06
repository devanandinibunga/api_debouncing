import React from 'react'

export const ApiCalling4 = ({delayedFetchWithDebounce,url4}) => {


  return (
    <button onClick={()=>delayedFetchWithDebounce(url4,3000)}>Click me 4</button>
  )
}

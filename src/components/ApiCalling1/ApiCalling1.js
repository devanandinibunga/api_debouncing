import React from 'react'

export const ApiCalling1 = ({delayedFetchWithDebounce,url1}) => {


  return (
    <button onClick={()=>delayedFetchWithDebounce(url1,3000)}>Click me 1</button>
  )
}

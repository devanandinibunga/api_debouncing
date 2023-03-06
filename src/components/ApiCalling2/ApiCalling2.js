import React from 'react'

export const ApiCalling2 = ({delayedFetchWithDebounce,url2}) => {


  return (
    <button onClick={()=>delayedFetchWithDebounce(url2,3000)}>Click me 2</button>
  )
}

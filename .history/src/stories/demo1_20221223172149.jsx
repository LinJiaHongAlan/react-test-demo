import React,{ useRef } from "react"

export const Demo1 = () => {
  const rootRef = useRef()

  return <div style={{width: '100%', height: '600px'}}>
    <div ref={rootRef} style={{width: '100%', height: '100%'}}>

    </div>
  </div>
}
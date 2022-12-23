import React,{ useRef, useEffect } from "react"
import * as THREE from 'three';

export const Demo1 = () => {
  const rootRef = useRef()

  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();
  })

  return <div style={{width: '100%', height: '600px'}}>
    <div ref={rootRef} style={{width: '100%', height: '100%'}}>
    </div>
  </div>
}
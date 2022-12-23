import React,{ useRef, useEffect } from "react"
import * as THREE from 'three';

export const Demo1 = () => {
  const rootRef = useRef()

  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // 创建一个物体
    const geometry = new THREE.BoxGeometry();
    // 创建材质
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // 生成网格
    const cube = new THREE.Mesh( geometry, material );

    // 添加到场景
    scene.add(cube)

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    rootRef.current.appendChild( renderer.domElement );


  })

  return <div style={{width: '100%', height: '600px'}}>
    <div ref={rootRef} style={{width: '100%', height: '100%'}}>
    </div>
  </div>
}
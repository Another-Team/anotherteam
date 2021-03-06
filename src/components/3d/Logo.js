import React from 'react'
import * as THREE from 'three'
import ant from '../../img/ant.png'
import {useLoader} from 'react-three-fiber'


  const Logo = (props) => {

    const [ texture ] = useLoader(THREE.TextureLoader, [ant])
  
    return (
      <mesh
        {...props}
        position={[0, 3, -5]}
        >
          <planeGeometry attach="geometry" args={[4, 4]} />
          <meshLambertMaterial attach="material" map={texture} transparent />
        </mesh>
    )
  }
export default Logo
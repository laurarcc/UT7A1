import {useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "@react-three/drei";
import {useRef} from "react";
function XrPato() {
    const gltf = useLoader(GLTFLoader, '/model.gltf')
    const pato = useRef();
    useFrame((state, delta) => {
        //console.log(cubeRef)
        pato.current.rotation.y += delta;
    });
    return(<>
            <OrbitControls />
            <ambientLight />
            <primitive ref={pato} object={gltf.scene} position={[0,0,-5]} scale={[4, 4, 4]}/>
        </>
    )
} export default XrPato;
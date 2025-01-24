import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function XrTorusKnot() {
    const torusKnot = useRef();
    useFrame((state, delta) => {
        //console.log(cubeRef)
        torusKnot.current.rotation.y += delta;
    });
    return(
        <>
            <OrbitControls />
            <ambientLight />
            <mesh ref={torusKnot} position={[0, 0, -5]}>
                <torusKnotGeometry args={[1, 0.4, 64, 8]}/>
                <meshStandardMaterial color='lightblue' />
            </mesh>
        </>
    )
}
export default XrTorusKnot;
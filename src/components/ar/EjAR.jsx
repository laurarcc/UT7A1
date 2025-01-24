//Ejemplo de un cubo en RA
import {Canvas} from "@react-three/fiber";
import {ARButton, XR} from "@react-three/xr";
import XrTorusKnot from "./XrTorusKnot.jsx";
import XrCube from "./XrCube.jsx";


function EjAR() {


    return (
        <>
            <Canvas>
                <XR>
                    <XrCube/>
                </XR>
            </Canvas>

            <ARButton/>
            <Canvas>
                <XR>
                    <XrTorusKnot/>
                </XR>
            </Canvas>

        </>
    )

}

export default EjAR;
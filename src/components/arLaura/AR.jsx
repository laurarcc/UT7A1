import {ARButton, XR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import XrPato from "./XrPato.jsx";

function AR(){
    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrPato />
                </XR>
            </Canvas>
        </>
    )
} export default AR;
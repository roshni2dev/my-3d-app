import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Character from '../character/character.component';
import { useRef } from 'react';
import { angleToRadians } from '../../utils/angle';
import AutoRotateCamera from '../auto-rotate-camera/auto-rotate-camera.component';

const Scene = ({ animationIndex }) => {
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if (!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
            orbitControlsRef.current.update();
        }
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <AutoRotateCamera />
            <Character animationIndex={animationIndex} />
            <OrbitControls autoRotate autoRotateSpeed={2} />
            {/* <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <directionalLight
                castShadow
                color={"#f3d29a"}
                intensity={2}
                position={[10, 5, 4]}
                shadow-bias={-0.0005}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.01}
                shadow-camera-far={20}
                shadow-camera-top={6}
                shadow-camera-bottom={-6}
                shadow-camera-left={-6.2}
                shadow-camera-right={6.4}
            /> */}

        </>
    );
};

export default Scene;
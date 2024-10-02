import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Character from '../character/character.component';

const Scene = ({animationIndex}) => {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Character animationIndex={animationIndex} />
            <OrbitControls />
        </Canvas>
    );
};

export default Scene;

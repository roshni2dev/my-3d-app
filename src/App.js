import React, { Suspense, useState } from 'react';
import Buttons from './components/buttons/buttons.component';
import Scene from './components/scene/scene.component';
import { Canvas } from '@react-three/fiber';

const App = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Canvas style={{ height: '100vh' }} shadows>
        <Suspense fallback={<></>}>
          <Scene animationIndex={animationIndex} />
        </Suspense>
      </Canvas>
      <Buttons setAnimationIndex={setAnimationIndex} />
    </div>
  );
};

export default App;
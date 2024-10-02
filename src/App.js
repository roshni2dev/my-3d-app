import React, { useState } from 'react';
import Buttons from './components/buttons/buttons.component';
import Scene from './components/scene/scene.component';

const App = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Scene animationIndex={animationIndex} />
      <Buttons setAnimationIndex={setAnimationIndex} />
    </div>
  );
};

export default App;

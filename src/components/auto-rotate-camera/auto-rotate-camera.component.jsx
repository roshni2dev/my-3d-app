// AutoRotatingCamera.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AutoRotatingCamera = () => {
  const cameraRef = useRef();
  const radius = 5; // Distance from the object
  const speed = 0.01; // Speed of rotation
  const angleRef = useRef(0); // Track the angle of rotation

  useFrame(() => {
    angleRef.current += speed; // Increment the angle

    // Update camera position
    cameraRef.current.position.x = Math.cos(angleRef.current) * radius;
    cameraRef.current.position.z = Math.sin(angleRef.current) * radius;
    cameraRef.current.position.y = 2; // Set camera height

    // Look at the center (the object)
    cameraRef.current.lookAt(0, 8, 10);
  });

  return <perspectiveCamera ref={cameraRef} fov={75} position={[0, 2, 5]} />;
};

export default AutoRotatingCamera;

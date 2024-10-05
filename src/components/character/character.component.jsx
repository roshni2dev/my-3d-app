import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

const Character = ({ animationIndex }) => {
    const { scene, animations } = useGLTF('/models/woman.gltf'); 
    const mixer = useRef(new AnimationMixer(scene));
    const ref = useRef();

    useEffect(() => {
      const action = mixer.current.clipAction(animations[animationIndex]);
      action.reset().play();
  
      return () => {
        mixer.current.stopAllAction();
      };
    }, [animationIndex, animations]);
  
    useFrame((state, delta) => {
      mixer.current.update(delta);
    });

    useFrame(() => {
        if (ref.current) {
          ref.current.rotation.y += 0.02; 
        }
      });
  
    return <primitive ref={ref} object={scene} />;
  };

export default Character;


import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ReactThreeFiber.Object3DNode<
        THREE.Object3D,
        typeof THREE.Object3D
      > & {
        object: THREE.Object3D;
      };
    }
  }
}

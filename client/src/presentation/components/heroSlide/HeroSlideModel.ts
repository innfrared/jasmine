import * as THREE from 'three';

export const HeroSlideModel = () => {

    // const isMesh = (object: THREE.Object3D): object is THREE.Mesh => {
//     return (object as THREE.Mesh).isMesh !== undefined;
// };

    // const Model = ({ url, initialScale, }: { url: string; initialScale: number; }) => {
//     const { scene } = useGLTF(url);
//     const [scale, setScale] = useState(initialScale);
//     const { camera, size } = useThree(); // Access canvas size for aspect ratio
//
//     useEffect(() => {
//         const box = new THREE.Box3().setFromObject(scene);
//         const sizeVec = new THREE.Vector3();
//         const center = new THREE.Vector3();
//         box.getSize(sizeVec);
//         box.getCenter(center);
//
//         const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z); // Largest dimension of the object
//         const aspect = size.width / size.height; // Canvas aspect ratio
//
//         // Adjust distance to fit object with padding
//         const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180); // Convert FOV to radians
//         const distance = (maxDim * 1.5) / (2 * Math.tan(fov / 2)); // Adjust distance with larger multiplier
//         const adjustedDistance = distance * 6; // Add a strong padding factor for consistent distance
//         const finalDistance = Math.max(adjustedDistance, maxDim * 8); // Ensure minimum safe distance
//
//         // Set camera position and orientation
//         camera.position.set(center.x, center.y + finalDistance, center.z + finalDistance / aspect);
//         camera.lookAt(center);
//
//         scene.traverse((object) => {
//             if (isMesh(object)) {
//                 object.castShadow = true;
//                 object.receiveShadow = true;
//             }
//         });
//     }, [scene, camera, size]);
//
//     useFrame((state, delta) => {
//         // Smoothly scale the object
//         if (scale < 1) {
//             setScale((prev) => Math.min(prev + delta * 0.5, 1));
//         }
//     });
//
//     return <primitive object={scene} scale={[scale, scale, scale]} />;
// };

    const animateModels = (scene: THREE.Scene) => {
        let scale = 0;
        const growModels = () => {
            scale += 0.01;
            if (scale <= 1) {
                scene.scale.set(scale, scale, scale);
                requestAnimationFrame(growModels);
            }
        };
        growModels();
    };

    return { animateModels };
};

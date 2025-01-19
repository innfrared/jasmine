import React, {useEffect, useState} from 'react';
import {Canvas, useThree} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from './HeroSlide.module.css';
import * as THREE from 'three';
import {useTranslation} from "react-i18next";

const Model = ({ url }: { url: string }) => {
    const { scene } = useGLTF(url);
    const { camera, size } = useThree();

    React.useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const sizeVec = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(sizeVec);
        box.getCenter(center);

        const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z); // Largest dimension (height, width, depth)
        const aspect = size.width / size.height; // Canvas aspect ratio
        const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180); // FOV in radians

        // Ensure the object fits vertically in the view
        const fitHeightDistance = sizeVec.y / (2 * Math.tan(fov / 2));
        const fitWidthDistance = sizeVec.x / (2 * Math.tan(fov / 2)) / aspect;

        // Use the larger distance to ensure the object fits entirely
        const distance = Math.max(fitHeightDistance, fitWidthDistance) * 2; // Add padding

        // Set the camera position
        camera.position.set(center.x, center.y + distance, center.z + distance / aspect);
        camera.lookAt(center);
    }, [scene, camera, size]);

    return <primitive object={scene} />;
};

const HeroSlide: React.FC = () => {
    const { t } = useTranslation<'translation'>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger the animation after a small delay to ensure page load
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer); // Cleanup
    }, []);

    const models = [
        '/assets/modelsGLTF/fridge/scene.gltf',
        '/assets/modelsGLTF/sofa/scene.gltf',
        '/assets/modelsGLTF/laptop/scene.gltf',
        '/assets/modelsGLTF/monitor/scene.gltf',
        '/assets/modelsGLTF/furniture/scene.gltf',
        '/assets/modelsGLTF/wardrobe/scene.gltf',
        '/assets/modelsGLTF/washing_machine/scene.gltf',
    ];

    return (
        <div className={styles.heroContainer}>
            <div className={`${styles.centralText} ${isLoaded ? styles.loaded : ''}`}>
                <h1>{t('slogan_part_1')}</h1>
                <div className={styles.horizontalLine}></div>
                <h3>{t('slogan_part_2')}</h3>
            </div>

            {/* Left Models */}
            <div className={styles.leftModels}>
                {models.slice(0, 2).map((url, index) => (
                    <div key={index} className={styles.canvasWrapper}>
                        <Canvas shadows>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 10]} castShadow intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
                            <Model url={url} />
                        </Canvas>
                    </div>
                ))}
            </div>

            {/* Right Models */}
            <div className={styles.rightModels}>
                {models.slice(2, 4).map((url, index) => (
                    <div key={index} className={styles.canvasWrapper}>
                        <Canvas shadows>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 10]} castShadow intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
                            <Model url={url} />
                        </Canvas>
                    </div>
                ))}
            </div>

            {/* Bottom Models */}
            <div className={styles.bottomModels}>
                {models.slice(4).map((url, index) => (
                    <div key={index} className={styles.canvasWrapper}>
                        <Canvas shadows>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 10]} castShadow intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
                            <Model url={url} />
                        </Canvas>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSlide;
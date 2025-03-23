import React, {useEffect, useState} from 'react';
import styles from './HeroSlide.module.css';
import {useTranslation} from "react-i18next";

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
        </div>
    );
};

export default HeroSlide;
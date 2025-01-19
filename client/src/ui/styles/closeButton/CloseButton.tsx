import React from 'react';
import styles from './CloseButton.module.css';

type ButtonProps = {
    onClick?: () => void;
};

const CloseButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.closeButton} onClick={onClick}>
            <span className={styles.X}></span>
            <span className={styles.Y}></span>
        </button>
    );
};

export default CloseButton;

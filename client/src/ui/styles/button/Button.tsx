import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    variant: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
    return (
        <button className={styles[variant]} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

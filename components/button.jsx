import React from 'react';
import styles from '@/styles/Button.module.css';
import { useRouter } from 'next/router';

const Button = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/services');
    };

    return (
        <button className={styles.btn} onClick={handleClick} >
            Contact
        </button>
    );
};

export default Button;

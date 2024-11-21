import React, { useState } from 'react';
import styles from './index.module.scss';

interface SpoilerTextProps {
    children: React.ReactNode;
}

const SpoilerText: React.FC<SpoilerTextProps> = ({ children }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    const toggleSpoiler = () => {
        setIsRevealed(!isRevealed);
    };

    return (
        <div onClick={toggleSpoiler} className={isRevealed ? '' : styles.spoilerText}>
            {children}
        </div>
    );
};

export default SpoilerText;
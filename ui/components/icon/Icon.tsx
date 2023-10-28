import React from 'react';
import styles from './Icon.module.css';
import { IconProps } from './IconProps';

const Icon: React.FC<IconProps> = ({ size = 'medium', color = 'black', svg }) => {
    const classes = [styles.icon, styles[size]];

    return (
        <div className={classes.join(' ')} style={{ color }} role="img" aria-label="icon">
            {React.cloneElement(svg, { fill: color })}
        </div>
    );
};

export default Icon;
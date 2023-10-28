import React from 'react';
import styles from './TextComponent.module.css';

type TextSize = 'heading-xs' | 'heading-sm' | 'heading-md' | 'heading-lg' | 'heading-xl' | 'body-xs' | 'body-sm' | 'body-md';
type Color = 'primary' | 'secondary' | 'tertiary' | 'disabled';
type FontStyle = 'default' | 'mono';

interface TextComponentProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
    size: TextSize;
    color: Color;
    style?: FontStyle;
    children?: React.ReactNode;
}

export const TextComponent: React.FC<TextComponentProps> = ({
    tag: Tag = 'span',
    size,
    color,
    style = 'default',
    children,
}) => {
    return <Tag
        className={`${styles.text}`}
        data-size={size}
        data-color={color}
        data-style={style}
    >{children}</Tag>;
};

export default Text;

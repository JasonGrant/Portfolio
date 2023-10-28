import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
    onClick?: () => void;
    label: string;
    ariaLabel?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "tertiary";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    iconOnly?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    label,
    ariaLabel,
    disabled = false,
    type = "button",
    size = 'medium',
    variant = 'primary',
    startIcon,
    endIcon,
    iconOnly,
    children,
    ...otherProps
}) => {
    const accessibilityProps = iconOnly ? { 'aria-label': ariaLabel || label } : {};


    return (
        <button
            className={`${styles.button}`}
            type={type}
            onClick={onClick}
            // aria-label={ariaLabel || label}
            disabled={disabled}
            data-size={size}
            data-type={type}
            data-variant={variant}
            {...accessibilityProps}
            {...otherProps}
        >
            {startIcon && <span className={styles.iconStart}>{startIcon}</span>}
            {!iconOnly && <span>{label}</span>}
            {!iconOnly && <span>{children}</span>}
            {endIcon && <span className={styles.iconEnd}>{endIcon}</span>}
        </button>
    );
};

export default Button;
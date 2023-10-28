import { ReactElement } from "react";

export interface IconProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    svg: ReactElement;
}
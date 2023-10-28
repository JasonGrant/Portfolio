"use client"
import React, { createContext, useEffect, useState, FC } from 'react';

type Theme = 'light' | 'dark';

type ThemeProps = {
    children: React.ReactNode
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: FC<ThemeProps> = ({ children }) => {

    const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [theme, setTheme] = useState<Theme>(systemTheme);

    useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
    );
};




// export default function RootLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     return (
//       <html lang="en">
//         <body className={font.className}>{children}</body>
//       </html>
//     )
//   }
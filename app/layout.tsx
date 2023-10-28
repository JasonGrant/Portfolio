import './globals.css'
import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import { ThemeProvider } from '@/lib/theming/themeContext';
import ThemeSwitcher from '@/lib/theming/themeSwitcher';

const font = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jason Grant | Home',
  description: 'Jason Grant portfolio, writings, leadership approach and experience with design systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
          <ThemeSwitcher />
        </body>
      </html>
    </ThemeProvider>
  )
}

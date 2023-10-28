import Link from 'next/link'
import type { Metadata } from 'next'
import Button from '@/ui/components/button/Button'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Jason Grant | About',
    description: 'Learn more about Jason Grant',
  }

export default function About() {
    return (
        <main className={styles.main}>
            <h1>About</h1>
            <Link href='/'>Home</Link>
            <Button label="primary" variant='primary' size='medium'/>
            <Button label="secondary" variant='secondary' size='medium'/>
            <Button label="tertiary" variant='tertiary' size='medium'/>
        </main>
    )
}
import Link from 'next/link'
import styles from './page.module.css'

export default function Writing() {
  return (
    <main className={styles.main}>
        <h1>Writing</h1>
        <Link href='/'>Home</Link>
    </main>
  )
}
import Link from 'next/link'
import styles from './page.module.css'

export default function Projects() {
  return (
    <main className={styles.main}>
        <h1>Projects</h1>
        <Link href='/'>Home</Link>
    </main>
  )
}
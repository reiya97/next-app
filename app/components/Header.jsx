import styles from "./Header.module.css";
import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <li><Link href="/">Index</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </header>
    );
}

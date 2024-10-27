import styles from "./Header.module.css";
import Link from 'next/link';

export function Header() {
    return (
        <div>
            <ul className={styles.header}>
                <li><Link href="/">Index</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    );
}

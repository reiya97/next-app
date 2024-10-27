import styles from "../page.module.css";
import Link from 'next/link';

export function Header() {
    return (
        <div>
            <ul className="header-list">
                <li><Link href="/">Index</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    );
}

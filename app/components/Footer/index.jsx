import styles from "@/app/components/Footer/Footer.module.css";
import Link from 'next/link';

export function Footer(props) {
    return (
        <div>
            <footer className={styles.footer}>
                <ul>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/information">Information</Link></li>
                </ul>
            </footer>
        </div>
    );
}

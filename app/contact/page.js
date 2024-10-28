"use client"
import styles from "../page.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <h1>Contact Page</h1>
            <Footer />
        </div>
    );
}

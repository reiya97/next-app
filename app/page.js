import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Index page</h1>
        <div className={styles.ctas}></div>
      </main>
      <Footer />
    </div>
  );
}

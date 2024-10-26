import styles from "./page.module.css";
import { Footer } from "./components/Footer";
import { Headline } from "./components/Headline";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Headline title="Index Page" page="page.js"/>
      <Footer />
    </div>
  );
}

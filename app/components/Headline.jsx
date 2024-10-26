import styles from "../page.module.css";

export function Headline(props) {
  return (
    <div>
      <main className={styles.main}>
        <h1>{props.title}</h1>
        <div className={styles.ctas}>Defined in components/Headline.jsx</div>
        <p>Get started by editing app/{props.page}</p>
      </main>
    </div>
  );
}

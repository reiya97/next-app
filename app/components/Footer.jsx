import styles from "../page.module.css";

export function Footer(props) {
  return (
    <div>
      <footer className={styles.footer}>
        <p>Here is common footer section defined in components/{props.page}.jsx</p>
      </footer>
    </div>
      
  );
}

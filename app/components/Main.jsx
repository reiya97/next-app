import styles from "../page.module.css";

export function Main(props) {
    console.log(props);
    return (
        <div>
            <main className={styles.main}>
                <h1>{props.title}</h1>
                <div className={styles.ctas}>Defined in components/Main.jsx</div>
                <p>Get started by editing app/{props.page}</p>
                {props.comp}
                
                <button onClick={props.onClick}>Button</button>
            </main>
        </div>
    );
}

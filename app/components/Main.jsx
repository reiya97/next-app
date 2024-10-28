import { Boxes } from "./boxes";
import styles from "./Main.module.css";

export function Main(props) {
    console.log(props);
    return (
        <div>
            <main className={styles.main}>
                <Boxes />
                <h1>{props.title}</h1>
                <div className={styles.ctas}>Defined in <div className={styles.code}>components/Main.jsx</div></div>
                <p>Get started by editing app/{props.page}</p>
                {props.comp}
                
                <button onClick={props.onClick}>Button</button>
            </main>
        </div>
    );
}

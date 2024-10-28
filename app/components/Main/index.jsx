// import { Boxes } from "../Boxes";
import { Boxes } from "@/app/components/Boxes";
import styles from "@/app/components/Main/Main.module.css";
import { useCallback, useEffect, useState } from "react";


export function Main(props) {
    var [value, setValue] = useState("");

    const handleInput = useCallback((e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }, []);

    return (
        <div>
            <main className={styles.main}>
                <Boxes />
                <h1>{props.title}</h1>
                <div className={styles.ctas}>Defined in <div className={styles.code}>components/Main.jsx</div></div>
                <p>Get started by editing app/{props.page}</p>
                {props.comp}
                <button onClick={props.onClick}>Button</button>
                <input onChange={handleInput}/>
                <p>input value: {value}</p>
            </main>
        </div>
    );
}

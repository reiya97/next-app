import styles from "./Boxes.module.css";
// import Link from 'next/link';

const ITEMS = [
    {
        title: "title1",
        text: "text1text1",
    },
    {
        title: "title2",
        text: "text2text2",
    },
    {
        title: "title3",
        text: "text3text3",
    },
    {
        title: "title4",
        text: "text4text4",
    }
];//変わらないものを定義する時は全て大文字

export function Boxes(props) {
    return (
        <ul className={styles.boxes}>
            {ITEMS.map(item => {
                return (
                    <li key={item.title}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </li>
                )
            })}
        </ul>
    );
}

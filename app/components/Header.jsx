import styles from "../page.module.css";

export function Header() {
  return (
    <div>
        <ul className="header-list">
            <li><a href="/">Index</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
  );
}

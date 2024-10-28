"use client";
import styles from "@/app/page.module.css";
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { Header } from "@/app/components/Header";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <Main
                title="Index Page"
                page="page.js" //string
                num={100} //number
                array={[1,2,3]} //array
                obj={{foo: "foo", bar: "bar"}} //object
                bool //boolean
                comp={<div>component of props</div>} //component
                onClick={() => alert("cliecked")} //function
            />
            <Footer />
        </div>
    );
}

import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/UseEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1) 
    })

    return(
        <div className={styles.main}>
            <Link href="/"><h2>Home</h2></Link>
            <div>
                <h3>useEffectOne</h3>
            </div>
            <div className={styles.number}>
                {number}
            </div>
        </div>
    )
}
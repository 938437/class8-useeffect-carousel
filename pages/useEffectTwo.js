import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/UseEffectTwo.module.css'

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return(
        <div className={styles.main}>
            <Link href="/"><h2>Home</h2></Link>
            <div>
                <h3>UseEffectTwo</h3>
            </div>
            <div className={styles.number}>
                {number}
            </div>
        </div>
    )
}
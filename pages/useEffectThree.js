import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/UseEffectThree.module.css'

export default function UseEffectThree() {

    const [number, setNumber] = useState(0);

    const [value,setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10) 
    }, [number])

    return(
        <div className={styles.main}>
            <Link href="/"><h2>Home</h2></Link>
            <div>
                <h3>useEffectThree</h3>
            </div>
            <div>
                <button className={styles.button} onClick={() => setNumber(number + 1)}>Click me</button>
            </div>
            <div className={styles.number}>
                {value}
            </div>
        </div>
    )
}
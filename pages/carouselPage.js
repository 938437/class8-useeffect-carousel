import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from '../styles/CarouselPage.module.css'

export default function CarouselPage() {
    return(
        <div className={styles.main}>
            <Link href="/"><h2>Home</h2></Link>
            <div className={styles.Carousel}>
                <Carousel/>
            </div>
        </div>
    )
}
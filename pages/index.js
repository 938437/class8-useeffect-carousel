import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/useEffectOne"><h2>useEffectOne</h2></Link>
        <Link href="/useEffectTwo"><h2>useEffectTwo</h2></Link>
        <Link href="/useEffectThree"><h2>useEffectThree</h2></Link>
        <Link href="/carouselPage"><h2>carouselPage</h2></Link>
      </main>
    </>
  )
}
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

type Props = {
    nowDate: string
    pageTitle: string
}

export default function SSGDemo({ nowDate, pageTitle }: Props) {
    return  (
        <div className={styles.main}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h2 className={styles.title}>{pageTitle}</h2>
                <p>What time is it now?</p>
                <p>It&apos;s {nowDate}.</p>
                <p className={styles.description}>
                <Link href={'/'}>Go back</Link>
                </p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    return {
        props: {
            nowDate: new Date().toLocaleString(),
            pageTitle: 'SSG Demo'
        }
    }
}
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fanvue's Frontend coding challenge</h1>

        <div className={styles.grid}>
          <a href="/feed" className={styles.card}>
            <h2>Go to Feed page</h2>
            <p>And start the first task</p>
          </a>
          <a href="/vault" className={styles.card}>
            <h2>Go to Vault page</h2>
            <p>And start the second task</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

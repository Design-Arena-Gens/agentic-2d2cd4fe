import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Futuristic Car Evolution</title>
        <meta
          name="description"
          content="Watch a car evolve from classic to futuristic and take flight across the sea."
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Evolution of the Future Ride</h1>
          <p className={styles.subtitle}>
            Follow the metamorphosis as a classic car transforms into a sleek
            futuristic machine before soaring above the ocean.
          </p>
        </section>
        <section className={styles.scene}>
          <div className={styles.backdrop}>
            <div className={styles.horizon}></div>
            <div className={styles.sea}></div>
            <div className={styles.sky}></div>
          </div>
          <div className={styles.track}></div>
          <div className={styles.car}>
            <div className={styles.bodyTop}></div>
            <div className={styles.bodyCore}></div>
            <div className={styles.bodyBottom}></div>
            <div className={`${styles.wheel} ${styles.frontWheel}`}>
              <div className={styles.wheelInner}></div>
            </div>
            <div className={`${styles.wheel} ${styles.backWheel}`}>
              <div className={styles.wheelInner}></div>
            </div>
            <div className={`${styles.wing} ${styles.leftWing}`}></div>
            <div className={`${styles.wing} ${styles.rightWing}`}></div>
            <div className={styles.thruster}></div>
            <div className={styles.glow}></div>
          </div>
          <div className={styles.trail}></div>
        </section>
        <section className={styles.timeline}>
          <div className={styles.stage}>
            <span className={styles.stageLabel}>Classic</span>
            <span className={styles.stageIndicator}></span>
            <span className={styles.stageTime}>0s</span>
          </div>
          <div className={styles.stage}>
            <span className={styles.stageLabel}>Futuristic</span>
            <span className={styles.stageIndicator}></span>
            <span className={styles.stageTime}>8s</span>
          </div>
          <div className={styles.stage}>
            <span className={styles.stageLabel}>Flying</span>
            <span className={styles.stageIndicator}></span>
            <span className={styles.stageTime}>14s</span>
          </div>
        </section>
      </main>
    </>
  );
}

import React from 'react'
import styles from "./featured.module.css";

const Featured = () =>  {
    return (
        <div className={styles.container}>
            <h1 className={styles.fh1}>who am i?</h1>
            <div className={styles.fp}>
                <p>i&apos;m a <strong>monk, </strong>who&apos;s a<strong className={styles.str}> philosopher, </strong>  passionate about <strong className={styles.str}>Artificial intelligence, embedded systems,</strong> and finds <strong className={styles.str}>physics</strong> fun. if i&apos;m living, it&apos;s because there exist some great <strong className={styles.str}>movies</strong> and tv shows that I enjoy. here i post my <strong>philosophies</strong> and the philosophies i find interesting.</p>
            </div>
            <div className={styles.buttn}>
                <buton className={styles.butx}><span><a href={"/"}>more about me</a></span></buton>
            </div>

        </div>
    )
}

export default Featured
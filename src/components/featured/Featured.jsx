import React from 'react'
import styles from "./featured.module.css";

const Featured = () =>  {
    return (
        <div className={styles.container}>
            <h1 className={styles.fh1}>who am i?</h1>
            <div className={styles.fp}>
                <p>
                    i'm a <strong className={styles.str}>monk, </strong>
                    who's a<strong className={styles.str}> philosopher, </strong> passionate about ai/ <strong>embedded systems,</strong> and finds <strong className={styles.str}>physics</strong> fun. if i'm living, it's because there exist some great movies and tv shows that I enjoy. here i post my<strong>philosophies</strong> and the philosophies i find interesting.
                </p>
            </div>
            <div className={styles.buttn}>
                <buton className={styles.butx}><span><a href={"/about-me"}>more about me</a></span></buton>
            </div>

        </div>
    )
}

export default Featured
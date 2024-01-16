import React from 'react'
import styles from "./featured.module.css";

const Featured = () =>  {
    return (
        <div className={styles.container}>
            <h1 className={styles.fh1}>who am i?</h1>
            <div className={styles.fp}>
                <p>
                    i'm a <strong className={styles.str}>monk, </strong>
                    who's a<strong className={styles.str}> philosopher, </strong> passionate about building <strong>programs and electronics,</strong> find's <strong className={styles.str}>physics</strong> fun. specially quantum and astrophysics. currently learning about quantum computers and <strong>researching</strong> a way you can simulate real-world object in the real world with the help of <strong>quantum computation and engineering</strong>. in this blog i post weird stuff! mostly my <strong>thoughts</strong> and philosophies
                </p>
            </div>
            <div className={styles.buttn}>
                <buton className={styles.butx}><span><a href={"/about-me"}>more about me</a></span></buton>
            </div>

        </div>
    )
}

export default Featured
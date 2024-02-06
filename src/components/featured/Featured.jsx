import React from 'react';
import styles from "./featured.module.css";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.fh1}>who am i?</h1>
            <div className={styles.fp}>
                <p>
                    I'm a <strong className={styles.str}>monk</strong>, who's a{' '}
                    <strong className={styles.str}>philosopher</strong> passionate about Artificial intelligence, embedded systems, and finds{' '}
                    <strong className={styles.str}>physics</strong> fun. If I'm living, it's because there exist some great{' '}
                    <strong className={styles.str}>movies</strong> and TV shows that I enjoy. Here I post my <strong>philosophies</strong> and the philosophies I find interesting.
                </p>
            </div>
            <div className={styles.buttn}>
                <button className={styles.butx}><span><a href={"/about-me"}>more about me</a></span></button>
            </div>
        </div>
    );
};

export default Featured;


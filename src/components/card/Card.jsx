import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
    return (
        <Link href="/ss">
                <article className={styles.post}>

                        <h2 className={styles.title} >feature 1</h2>

                    <p className={styles.date} >January 1, 2021</p>
                    <p className={styles.blogpostContent} >
                        The website offers a variety of articles
                        and tutorials on different programming
                        languages, data structures, and algorithms,
                        making it a great resource for anyone
                        looking to improve their coding skills.
                        The website also provides a platform for
                        users to test their skills by solving
                        practice problems, which are accompanied
                        by detailed solutions and explanations.
                    </p>
                    <button className={styles.button}><span><a href={"/"}>read more</a></span></button>
                </article>
        </Link>

    );
}

export default Card;

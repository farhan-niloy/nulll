import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({key, item}) => {
    return (
            <article className={styles.post} key = {key}>

                <Link href={`/posts/${item.slug}`}>
                    <h2 className={styles.title} >{item.title}</h2>
                </Link>

                <p className={styles.date} >{item.createdAt.substring(0, 10)}</p>
                <p className={styles.blogpostContent} >
                    {item.desc.substring(0, 150)}
                </p>
                <Link href={`/posts/${item.slug}`}>
                <button className={styles.button}><span><a href={`/posts/${item.slug}`}>read more</a></span></button>
                    </Link>
            </article>

    );
}

export default Card
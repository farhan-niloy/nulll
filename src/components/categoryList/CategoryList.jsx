import React from 'react'
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () =>  {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.thoughts}`}>
                    <Image
                        src="/thought.jpg"
                        alt="thought"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    thoughts&zwnj;
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.articles}`}>
                    <Image
                        src="/article.jpg"
                        alt="articles"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                      articles
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.infiltration}`}>
                    <Image
                        src="/infiltration.png"
                        alt="infiltrations"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    infiltration
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.physics}`}>
                    <Image
                        src="/physics.jpg"
                        alt="programs"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    programs
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.projeccts}`}>
                    <Image
                        src="/projects.jpg"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    projects
                </Link>
            </div>
        </div>
    )
}

export default CategoryList
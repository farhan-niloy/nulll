import React from 'react';
import styles from "./footer.module.css";
import Link from "next/link";
import {TfiGithub} from 'react-icons/tfi';
import {BsLinkedin} from 'react-icons/bs';
import {RiTwitterXLine} from 'react-icons/ri';
import {ImFacebook2} from 'react-icons/im';
import Copyright from "@/components/copyright/Copyright";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                    <h1 className={styles.logo}>null</h1>
                <p className={styles.text}>Man is a rope stretched between the animal and the Superman--a rope over an abyss. A dangerous crossing, a dangerous wayfaring, a dangerous looking-back, a dangerous trembling and halting. What is great in man is that he is a bridge and not a goal: what is lovable in man is that he is an OVER-GOING and a DOWN-GOING.</p>
                <strong className={styles.text2}>| fernando pessoa</strong>
            </div>

            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>tags</span>
                    <Link className={styles.linkItem} href="/"></Link>
                    <Link className={styles.linkItem} href="/">thoughts</Link>
                    <Link className={styles.linkItem} href="/">article</Link>
                    <Link className={styles.linkItem} href="/">infiltration</Link>
                    <Link className={styles.linkItem} href="/">programs</Link>
                    <Link className={styles.linkItem} href="/">projects</Link>

                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>links</span>
                    <Link className={styles.linkItem} href="/" >home</Link>
                    <Link className={styles.linkItem} href="/">about</Link>
                    <Link className={styles.linkItem} href="/">contact</Link>
                    <Link className={styles.linkItem} href="/">login</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>networks</span>
                    <Link className={styles.linkItem} target="_blank" href="https://github.com/niloy-farhan"><TfiGithub/> github</Link>
                    <Link className={styles.linkItem} target="_blank" href="https://www.linkedin.com/in/niloy-farhan-6067b422b/"><BsLinkedin/> linkedin</Link>
                    <Link className={styles.linkItem} target="_blank" href="https://twitter.com/MrFarhanNiloy"><RiTwitterXLine/> twitter</Link>
                    <Link className={styles.linkItem} target="_blank" href="https://facebook.com/nulll.me"><ImFacebook2/> facebook</Link>
                </div>
            </div>
            <div className={styles.copyright}>
                <Copyright/>
            </div>
        </div>

    )
}

export default Footer;

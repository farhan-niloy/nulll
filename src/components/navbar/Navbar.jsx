import React from 'react'
import styles from "./navbar.module.css";
import Image from 'next/image'
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
const Navbar = () =>  {
    return (
        <div className={styles.container}>
            <a href="/">
                <div className={styles.logo}>null</div>
            </a>
            <div className={styles.link}>
                <Link href={"/"} className={styles.links}>Home</Link>
                <Link href={"/"} className={styles.links}>About</Link>
                <Link href={"/"} className={styles.links}>Contact</Link>
                <AuthLinks/>
                <ThemeToggle className={styles.togg}/>
            </div>
        </div>

    )
}

export default Navbar
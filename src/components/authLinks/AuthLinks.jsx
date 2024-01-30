"use client"
import styles from "./authLinks.module.css";
import Link from "next/link";
import {useState} from "react";
import {signIn, signOut, useSession} from "next-auth/react";
const AuthLinks = () => {

    const [open, setOpen] = useState(false)

   const {status} = useSession();

   return(
       <>
           {status === "unauthenticated" ? (
               <Link href={"/login"} className={styles.link}>Login</Link>
           ):(
               <>
               <Link href={"/write"} className={styles.link}>Write</Link>
               <span className={styles.link} onClick={signOut}>Logout</span>
               </>
           )}
           <div className={styles.buttn} onClick={()=>setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
           </div>
           {open && (
               <div className={styles.responsiveMenu}>
                   <Link className={styles.item} href="/">Home</Link>
                   <Link className={styles.item} href="/">About</Link>
                   <Link className={styles.item} href="/">Contact</Link>
                   {status === "unauthenticated" ? (
                       <Link className={styles.item} href={"/login"}>Login</Link>
                   ):(
                       <>
                           <Link className={styles.item} href={"/write"}>Write</Link>
                           <span className={styles.item}>Logout</span>
                       </>
                   )}
               </div>
           )}
       </>
   );
};

export default AuthLinks;
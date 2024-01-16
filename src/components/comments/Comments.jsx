import styles from "./comments.module.css"
import Link from "next/link";

const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <div className={styles.divider}>

            </div>
            <h1 className={styles.title}>comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea className={styles.input} placeholder="write a comment.."/>
                    <button className={styles.button}>Send</button>
                </div>
            ): (
                <Link href="/login">Login to write a comment</Link>
            )

            }

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <img
                            src="/p1.jpeg"
                            alt="User Profile"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                        aperiam culpa quo nisi laboriosam alias obcaecati temporibus? Unde
                        non minus odio consectetur aliquam, quas praesentium justo molestias
                        adipisci consequatur soluta?
                    </p>
                </div>
            </div>





            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <img
                            src="/p1.jpeg"
                            alt="User Profile"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                        aperiam culpa quo nisi laboriosam alias obcaecati temporibus? Unde
                        non minus odio consectetur aliquam, quas praesentium justo molestias
                        adipisci consequatur soluta?
                    </p>
                </div>
            </div>


            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <img
                            src="/p1.jpeg"
                            alt="User Profile"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                        aperiam culpa quo nisi laboriosam alias obcaecati temporibus? Unde
                        non minus odio consectetur aliquam, quas praesentium justo molestias
                        adipisci consequatur soluta?
                    </p>
                </div>
            </div>


            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <img
                            src="/p1.jpeg"
                            alt="User Profile"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                        aperiam culpa quo nisi laboriosam alias obcaecati temporibus? Unde
                        non minus odio consectetur aliquam, quas praesentium justo molestias
                        adipisci consequatur soluta?
                    </p>
                </div>
            </div>

        </div>



    )
}

export default Comments
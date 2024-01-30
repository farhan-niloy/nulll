import styles from "./singlePage.module.css"
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <a href="/" className={styles.top}>
                    <div className={styles.back}>

                        <p><span className={styles.baack}>&#8617;</span> back to home</p>
                    </div>
                </a>
                <div className={styles.textContainer}>

                           <span className={styles.date}>
                                monday, 18 september 2023
                            </span>
                        <h2 className={styles.title}> feature 1</h2>

                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                        </div>
                        <a href="https://twitter.com/MrFarhanNiloy" target="_blank">
                            <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                null
                            </span>
                                <span className={styles.lin}>
                                @niloy-farhan
                            </span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            While Windscribe’s free plan includes a variety of capabilities, it does have some restrictions in comparison to the premium subscriptions. The amount of available server locations and the monthly data cap are some of these restrictions. You can think about upgrading to one of Windscribe’s subscription plans if you want unlimited data consumption and access to more features.
                        </p>
                        <br/>
                        <h1>hello</h1>
                        <br/>
                        <p>While Windscribe’s free plan includes a variety of capabilities, it does have some restrictions in comparison to the premium subscriptions. The amount of available server locations and the monthly data cap are some of these restrictions. You can think about upgrading to one of Windscribe’s subscription plans if you want unlimited data consumption and access to more features.</p>

                    </div>
                </div>
                <Comments />

            </div>
        </div>
    )
}

export default SinglePage
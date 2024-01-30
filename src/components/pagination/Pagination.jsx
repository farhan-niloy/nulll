import React from 'react'
import styles from "./pagination.module.css";
import Link from "next/link";
import {AiFillBackward} from "react-icons/ai";
import {BsFillFastForwardFill} from "react-icons/bs";
import {FaBackward, FaForward} from "react-icons/fa";

const Pagination = () =>  {
    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                <a href="/"><FaBackward/></a>
                <a href="/">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#"><FaForward/></a>
            </div>
        </div>
    )
}

export default Pagination
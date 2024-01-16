import styles from "./homepage.module.css";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.container}>
      <CardList/>
    </div>

  </div>;
}

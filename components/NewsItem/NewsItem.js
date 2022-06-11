import Link from "next/link";
import styles from "./NewsItem.module.css"

export default function NewsItem({ item }) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Link href={"/news-item"}>
                    <a>
                        <div className={styles.type}>{item.type}</div>
                        <img src={item.image} alt={item.title} />
                    </a>
                </Link>
            </div>
            <Link href={"/news-item"}>
                <a className={styles.title}>
                    {item.title}
                </a>
            </Link>
            <div className={styles.date}>
                {item.date}
            </div>
            <div className={styles.place}>
                {item.place}
            </div>
        </div>
    )
}
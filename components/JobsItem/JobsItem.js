import styles from "./JobsItem.module.css"
import Link from "next/link";

export default function JobsItem({ item }) {
    return (
        <div className={styles.container}>
            <Link href={"/"}>
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
            {!!item.labels.length && (
                <div className={styles.labels}>
                    {item.labels.map(label => (
                        <div key={label} className={styles.label}>{label}</div>
                    ))}
                </div>
            )}
        </div>
    )
}
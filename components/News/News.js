import styles from "./News.module.css"

export default function News({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
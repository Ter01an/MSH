import styles from "./Tabs.module.css"

export default function Tabs({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
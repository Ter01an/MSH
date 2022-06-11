import styles from "./Jobs.module.css"

export default function Jobs({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
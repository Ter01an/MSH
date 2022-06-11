import styles from "./Tab.module.css"

export default function Tab({ children, active = false, onClick = () => {} }) {
    return (
        <div onClick={onClick} className={[styles.item, (active ? styles.active : '')].join(" ")}>
            {children}
        </div>
    )
}
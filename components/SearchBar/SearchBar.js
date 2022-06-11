import IconCalendar from "../../icons/IconCalendar";
import IconSearchInput from "../../icons/IconSearchInput";
import styles from "./SearchBar.module.css"

export default function SearchBar() {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <IconSearchInput className={styles.icon} />
                <input className={styles.input} placeholder="Событие или вакансия" type="text"/>
            </div>
            <div className={styles.button}>
                <IconCalendar/>
            </div>
        </div>
    )
}
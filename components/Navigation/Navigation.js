import NavigationItem from "../NavigationItem";
import IconHome from "../../icons/IconHome";
import IconProfile from "../../icons/IconProfile";
import IconFavorite from "../../icons/IconFavorite";
import IconNotification from "../../icons/IconNotification";
import IconSearch from "../../icons/IconSearch";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <div className={styles.container}>
            <NavigationItem href={"/"} title={"Главная"} icon={<IconHome/>}/>
            <NavigationItem href={"/search"} title={"Найти"} icon={<IconSearch/>}/>
            <NavigationItem href={"/chat"} title={"Лучик"} icon={<IconFavorite/>} activeClass={"secondary"}/>
            <NavigationItem href={"/"} title={"Уведомления"} icon={<IconNotification/>}/>
            <NavigationItem href={"/"} title={"Профиль"} icon={<IconProfile/>}/>
        </div>
    )
}
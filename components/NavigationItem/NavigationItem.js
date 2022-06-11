import Link from "next/link"
import styles from "./NavigationItem.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NavigationItem({ href, title, icon, activeClass = 'primary'}) {
    const { asPath, isReady } = useRouter()
    const [ active, setActive ] = useState(false)

    useEffect(() => {
        if (isReady) {
            const linkPathname = new URL(href, location.href).pathname
            const activePathname = new URL(asPath, location.href).pathname

            setActive(linkPathname === activePathname)
        }
    }, [asPath, isReady, href])

    return (
        <Link href={href}>
            <a className={[styles.href, (active ? styles[activeClass] : "")].join(" ")}>
                {icon}
                <span className={styles.title}>{title}</span>
            </a>
        </Link>
    )
}
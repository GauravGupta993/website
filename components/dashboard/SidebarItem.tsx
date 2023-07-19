import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import Link from "next/link";
import styles from "../../styles/components/SidebarItem.module.scss"
import {useRouter} from "next/router";

type Item = {
    title: string,
    icon: JSX.Element,
    path: string
}

export const SidebarItem = (item: Item) => {

    const router = useRouter()

    const selected = (router.pathname === item.path) ? "true": "false"
    console.log(selected)
    return (
        <Link href={item.path} className={styles.sidebarItem} data-selected={selected}>
            {item.icon}
            <h3>{item.title}</h3>
        </Link>
    )
}
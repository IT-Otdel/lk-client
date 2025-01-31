import { FC, JSX } from "react"
import styles from "./TechnologyItem.module.scss"

interface ItemProps {
    text : string
}

export const TechnologyItem : FC<ItemProps> = ({ text }) : JSX.Element => {
    return (
        <div className={styles.technologyItem}>
            {text}
        </div>
    )
}
import {FC, JSX} from "react";
import styles from "./TitleText.module.scss"

interface IProps {
    title: string;
    text: string;
}

export const TitleText : FC<IProps> = ({title, text}) : JSX.Element => {
    return (
        <div className={styles.anyTitleTextContainer}>
            <div className={styles.anyTitle}>
                {title}
            </div>
            <div className={styles.anyText}>
                {text}
            </div>
        </div>
    )
}
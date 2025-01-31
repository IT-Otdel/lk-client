import {FC, JSX} from "react";
import styles from "./Button.module.scss"

interface IButtonProps {
    text: string;
}

export const Button : FC<IButtonProps> = ({ text }) : JSX.Element => {
    return (
        <button className={styles.someButton}>
            {text}
        </button>
    )
}
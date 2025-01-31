import {FC, JSX} from "react";
import {TechDepLogo} from "./icons/TechDepLogo.tsx";
import {Button} from "../../ui";
import styles from "./Header.module.scss";

export const Header : FC = (): JSX.Element => {
    return (
        <header>
            <TechDepLogo/>
            <div className={styles.navContainer}>
                <div className={styles.navItem}>
                    Возможности
                </div>
                <div className={styles.navItem}>
                    Обучение
                </div>
                <div className={styles.navItem}>
                    Наши люди
                </div>
                <div className={styles.navItem}>
                    FAQ
                </div>
                <div className={styles.navItem}>
                    Личный кабинет
                </div>
            </div>
            <Button text="Записаться"/>
        </header>
    )
}



import {FC, JSX} from "react";
import {RegistrationForm} from "../../modules";
import styles from "./RegistrationPage.module.scss";

export const RegistrationPage : FC = () : JSX.Element => {
    return(
        <div className={styles.container}>
            <RegistrationForm/>
        </div>
    )
}
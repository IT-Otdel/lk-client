import {FC, JSX} from "react";
import styles from "./StatusLabel.module.scss"

interface IStatusLabelProps {
    status: string;
}

export const StatusLabel : FC<IStatusLabelProps> = ({status}) : JSX.Element => {
    return (
        <div className={styles.statusLabel}>
            {status}
        </div>
    )
}
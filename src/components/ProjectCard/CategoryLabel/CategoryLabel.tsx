import {FC, JSX} from "react";
import styles from "./CategoryLabel.module.scss"

interface ICategoryProps {
    category: string;
}

export const CategoryLabel : FC<ICategoryProps> = ({category}) : JSX.Element => {
    return (
        <div className={styles.categoryLabel}>
            {category}
        </div>
    )
}
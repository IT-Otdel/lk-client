import {FC, JSX} from "react";
import styles from "./ProjectCard.module.scss"
import {LinkButtonImage} from "./assets/LinkButtonImage.tsx";
import {CategoryLabel} from "./CategoryLabel/CategoryLabel.tsx";
import {StatusLabel} from "./StatusLabel/StatusLabel.tsx";



interface IProjectProps {
    title : string;
    category : string;
    status : string;
    image : string
}

export const ProjectCard : FC<IProjectProps> = ({ title, category, status, image }) : JSX.Element => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img alt={'123'} className={styles.projectImage} src={image}/>
                <button className={styles.cornerButton}>
                    <LinkButtonImage/>
                </button>
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.statusesContainer}>
                <div>
                    <CategoryLabel category={category}/>
                </div>
                <div>
                    <StatusLabel status={status}/>
                </div>
            </div>
        </div>
    )
}
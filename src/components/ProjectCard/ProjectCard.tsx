import styles from './ProjectCard.module.scss';
import linkButtonImage from './assets/LinkButtonImage.svg';
import { CategoryLabel } from './CategoryLabel/CategoryLabel.tsx';
import { StatusLabel } from './StatusLabel/StatusLabel.tsx';
import { FC } from 'react';

interface IProjectProps {
    title: string;
    category: string;
    status: string;
    image: string;
}

export const ProjectCard: FC<IProjectProps> = ({
    title,
    category,
    status,
    image,
}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img alt={title} className={styles.projectImage} src={image} />
                <button className={styles.cornerButton}>
                    <img src={linkButtonImage} />
                </button>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.statusesContainer}>
                <div>
                    <CategoryLabel category={category} />
                </div>
                <div>
                    <StatusLabel status={status} />
                </div>
            </div>
        </div>
    );
};

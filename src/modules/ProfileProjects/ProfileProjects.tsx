import styles from './ProfileProjects.module.scss';
import { ProjectCard } from 'components/ProjectCard';
import { projectsData } from '../../mock-data/data.tsx';

export const ProfileProjects = () => {
    return (
        <div>
            <div className={styles.projectsHeader}>Проекты</div>
            <div className={styles.cardsContainer}>
                {projectsData.map((project) => (
                    <ProjectCard
                        title={project.title}
                        status={project.status}
                        category={project.type}
                        image={project.image}
                        key={crypto.randomUUID()}
                    />
                ))}
            </div>
        </div>
    );
};

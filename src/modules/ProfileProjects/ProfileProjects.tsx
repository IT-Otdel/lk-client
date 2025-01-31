import {FC, JSX} from "react";
import styles from "./ProfileProjects.module.scss";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard.tsx";
import { projectsData } from "../../mock-data/data.tsx";

export const ProfileProjects : FC = () : JSX.Element => {
    return (
        <>
            <div className={styles.projectsHeader}>
                    Ваши проекты
            </div>
            <div className={styles.cardsContainer}>
                {projectsData.map((project) => <ProjectCard title={project.title} status={project.status} category={project.type} image={project.image}/>)}
            </div>
        </>
    )
}
import {FC, JSX} from "react";
import { TitleText } from "../../components";
import { Image } from "antd";
import styles from "./Profile.module.scss";
import { userData } from "../../mock-data/data";
import { TechnologyItem } from "./TechnologyItem/TechnologyItem";




export const Profile : FC = () : JSX.Element => {
    return (
        <>
            <div className={styles.profileCardHeader}>
                <div>Профиль</div>
            </div>
            <div className={styles.profileCardBody}>
                <div className={styles.profileCardAvatarContainer}>
                    <img
                        className={styles.avatar}
                        src={userData.avatar}
                    />
                </div>
                <div className={styles.profileCardColumn}>
                    <TitleText title={"Ваше имя"} text={userData.fullname}/>
                    <TitleText title={"Username"} text={userData.username}/>
                    <TitleText title={"Grade"} text={userData.grade}/>
                </div>
                <div className={styles.profileCardColumn}>
                    <TitleText title={"Подписчики"} text={userData.subscribers}/>
                    <TitleText title={"Подписки"} text={userData.subscriptions}/>
                    <TitleText title={"Специализация"} text={userData.specialization}/>
                </div>
                <div className={styles.profileCardTechnologies}>
                    <div className={styles.profileCardTechnologiesTitle}>
                        Технологии
                    </div>
                    <div className={styles.profileCardTechnologiesContainer}>
                        {userData.technologies.map((item) => <TechnologyItem text={item}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}
import { TitleText } from './TitleText/TitleText';
import styles from './Profile.module.scss';
import { userData } from '../../mock-data/data';
import { TechnologyItem } from './TechnologyItem/TechnologyItem';

export const Profile = () => {
    return (
        <div>
            <div className={styles.profileCardHeader}>
                <div>Профиль</div>
            </div>
            <div className={styles.profileCardBody}>
                <div className={styles.profileCardAvatarContainer}>
                    <img className={styles.avatar} src={userData.avatar} />
                </div>
                <div className={styles.profileCardColumn}>
                    <TitleText title={'Ваше имя'} text={userData.fullname} />
                    <TitleText title={'Username'} text={userData.username} />
                    <TitleText title={'Grade'} text={userData.grade} />
                </div>
                <div className={styles.profileCardColumn}>
                    <TitleText
                        title={'Подписчики'}
                        text={userData.subscribers}
                    />
                    <TitleText
                        title={'Подписки'}
                        text={userData.subscriptions}
                    />
                    <TitleText
                        title={'Специализация'}
                        text={userData.specialization}
                    />
                </div>
                <div className={styles.profileCardTechnologies}>
                    <div className={styles.profileCardTechnologiesTitle}>
                        Технологии
                    </div>
                    <div className={styles.profileCardTechnologiesContainer}>
                        {userData.technologies.map((item, i) => (
                            <TechnologyItem text={item} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

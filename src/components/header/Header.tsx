import styles from './Header.module.scss';
import logo from './logo.svg';

export const Header = () => {
    return (
        <header>
            <img src={logo} />
            <div className={styles.navContainer}>
                <div className={styles.navItem}>Возможности</div>
                <div className={styles.navItem}>Обучение</div>
                <div className={styles.navItem}>Наши люди</div>
                <div className={styles.navItem}>FAQ</div>
                <div className={styles.navItem}>Личный кабинет</div>
            </div>
            <button className={styles.someButton}>
                Записаться
            </button>
        </header>
    );
};

import { RegistrationForm } from 'modules/RegistrationForm';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage = () => {
    return (
        <div className={styles.container}>
            <RegistrationForm />
        </div>
    );
};

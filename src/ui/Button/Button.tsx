import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
    return <button className={styles.button}>{text}</button>;
};

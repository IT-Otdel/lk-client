import { FC } from 'react';
import styles from './Button.module.scss';


interface ButtonProps {
    text: string;
    type?: "button" | "submit";
}

export const Button: FC<ButtonProps> = ({ text, type = 'button' }) => {
    return (
        <button className={styles.button} type={type}>
            {text}
        </button>
    );
};

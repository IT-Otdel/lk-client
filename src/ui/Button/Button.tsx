import { FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonType {
    button = "button",
    submit = "submit"
}

interface ButtonProps {
    text: string;
    type: ButtonType;
}

export const Button: FC<ButtonProps> = ({ text, type }) => {
    return (
        <button className={styles.button} type={type}>
            {text}
        </button>
    );
};

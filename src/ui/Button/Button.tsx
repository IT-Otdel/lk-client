import { FC } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';


interface ButtonProps {
    text: string;
    type?: "button" | "submit";
    className?: string;
}

export const Button: FC<ButtonProps> = ({ text, type = 'button' , className}) => {
    return (
        <button className={clsx(styles.button, className)} type={type}>
            {text}
        </button>
    );
};

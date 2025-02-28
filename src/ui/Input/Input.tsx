import styles from './Input.module.scss';
import { ChangeEvent, FC, useState } from 'react';
import defaultPassword from './assets/defaultPassword.svg';
import defaultEmail from './assets/defaultEmail.svg';
import outlinedPassword from './assets/outlinedPassword.svg';
import outlinedEmail from './assets/outlinedEmail.svg';
import eye from './assets/eye.svg';
import closedEye from './assets/closedEye.svg';
import { InputType } from './types';
import clsx from 'clsx';

interface InputProps {
    placeholder: string;
    type?: InputType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
}

export const Input: FC<InputProps> = ({
    placeholder,
    type = InputType.text,
    onChange,
    value,
    className
}) => {
    const [inputTypeState, setInputTypeState] = useState<InputType>(type);
    const [isActive, setIsActive] = useState(false);

    const toggleVisibility = () => {
        if (inputTypeState === InputType.password) {
            setInputTypeState(InputType.text);
        } else {
            setInputTypeState(InputType.password);
        }
    };

    const getIconSrc = () => {
        let iconSrc;

        if (type === InputType.password) {
            iconSrc = isActive ? outlinedPassword : defaultPassword;
        } else {
            iconSrc = isActive ? outlinedEmail : defaultEmail;
        }

        return iconSrc;
    };

    return (
        <label
            className={clsx(styles.container, className)}
            onFocus={() => {
                setIsActive(true);
            }}
            onBlur={() => {
                setIsActive(false);
            }}
            tabIndex={-1}
        >
            {type === InputType.password || type === InputType.email ? (
                <>
                    <img src={getIconSrc()} className={styles.icon} />
                    <div className={styles.separator}></div>
                </>
            ) : (
                <></>
            )}

            <input
                className={styles.inputField}
                type={inputTypeState}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {type === 'password' && (
                <img
                    src={
                        inputTypeState === InputType.password ? closedEye : eye
                    }
                    className={styles.showHideIcon}
                    onClick={toggleVisibility}
                />
            )}
        </label>
    );
};

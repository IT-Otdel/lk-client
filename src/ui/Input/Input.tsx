import styles from './Input.module.scss';
import { ChangeEvent, FC, useState } from 'react';
import defaultPassword from './assets/defaultPassword.svg';
import defaultEmail from './assets/defaultEmail.svg';
import outlinedPassword from './assets/outlinedPassword.svg';
import outlinedEmail from './assets/outlinedEmail.svg';
import eye from './assets/eye.svg';
import closedEye from './assets/closedEye.svg';

interface InputProps {
    placeholder: string;
    type: 'password' | 'text' | 'email';
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const Input: FC<InputProps> = ({
    placeholder,
    type,
    onChange,
    value,
}) => {
    const [inputType, setInputType] = useState<InputProps['type']>(type);
    const [isActive, setIsActive] = useState(false);

    const toggleVisibility = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

    return (
        <label
            className={styles.container}
            onFocus={() => {
                setIsActive(true);
            }}
            onBlur={() => {
                setIsActive(false);
            }}
            tabIndex={-1}
        >
            {type === 'password' || type === 'email' ? (
                <img
                    src={
                        type === 'password'
                            ? isActive === false
                                ? defaultPassword
                                : outlinedPassword
                            : isActive === false
                              ? defaultEmail
                              : outlinedEmail
                    }
                    className={styles.icon}
                />
            ) : (
                <></>
            )}

            {type === 'password' || type === 'email' ? (
                <label className={styles.separator}></label>
            ) : (
                <></>
            )}

            <input
                className={styles.inputField}
                type={inputType}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {type === 'password' && (
                <img
                    src={inputType === 'password' ? closedEye : eye}
                    className={styles.showHideIcon}
                    onClick={toggleVisibility}
                />
            )}
        </label>
    );
};

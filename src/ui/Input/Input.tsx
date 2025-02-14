import styles from './Input.module.scss';
import { ChangeEvent, FC, useState } from 'react';
import { InputType } from './types';
import defaultPassword from './assets/defaultPassword.svg';
import defaultEmail from './assets/defaultEmail.svg';
import outlinedPassword from './assets/outlinedPassword.svg';
import outlinedEmail from './assets/outlinedEmail.svg';
import eye from './assets/eye.svg';
import closedEye from './assets/closedEye.svg';

interface InputProps {
    placeholder: string;
    type: InputType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const Input: FC<InputProps> = ({
    placeholder,
    type,
    onChange,
    value,
}) => {
    const [inputState, setInputState] = useState(type);
    const [imageType, setImageType] = useState('default');
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
        if (inputState === InputType.password) {
            setInputState(InputType.text);
        } else {
            setInputState(InputType.password);
        }
    };

    const renderIcon = () => {
        if (type === 'password') {
            return (
                <>
                    <img
                        src={
                            imageType === 'default'
                                ? defaultPassword
                                : outlinedPassword
                        }
                        className={styles.icon}
                    />
                    <label className={styles.separator}></label>
                </>
            );
        } else if (type === 'email') {
            return (
                <>
                    <img
                        src={
                            imageType === 'default'
                                ? defaultEmail
                                : outlinedEmail
                        }
                        className={styles.icon}
                    />
                    <label className={styles.separator}></label>
                </>
            );
        }
        return <></>;
    };

    const renderEye = () => {
        if (inputState === InputType.password)
            return (
                <img
                    src={closedEye}
                    className={styles.showHideIcon}
                    onClick={handleToggle}
                />
            );
        else
            return (
                <img
                    src={eye}
                    className={styles.showHideIcon}
                    onClick={handleToggle}
                />
            );
    };

    return (
        <label
            className={styles.container}
            onFocus={() => {
                setImageType('outlined');
                setIsActive(true);
            }}
            onBlur={() => {
                setImageType('default');
                setIsActive(false);
            }}
            onMouseEnter={() => setImageType('otlined')}
            onMouseLeave={() => {
                if (!isActive) setImageType('default');
            }}
            tabIndex={-1}
        >
            {renderIcon()}

            <input
                className={styles.inputField}
                type={inputState}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {(type === InputType.password) && renderEye()}
        </label>
    );
};

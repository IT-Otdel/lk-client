import styles from './Input.module.scss';
import { ChangeEvent, FC, useState } from 'react';
import { InputType } from './types';
import defaultLock from './assets/defaultLock.svg';
import defaultMail from './assets/defaultMail.svg';
import outlinedLock from './assets/outlindeLock.svg';
import outlinedMail from './assets/outlinedMail.svg';
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
    const [inputState, setInputState] = useState('password');
    const [imageType, setImageType] = useState('default');
    const changeImageType = () => {
        if (imageType === 'default') setImageType('outlined');
        else setImageType('default');
    };

    if (type === 'password') {
        const handleToggle = () => {
            if (inputState === InputType.password) {
                setInputState(InputType.text);
            } else {
                setInputState(InputType.password);
            }
        };

        return (
            <div
                className={styles.container}
                onFocus={changeImageType}
                onBlur={changeImageType}
                onMouseEnter={changeImageType}
                onMouseLeave={changeImageType}
            >
                <img
                    src={imageType === 'default' ? defaultLock : outlinedLock}
                    className={styles.icon}
                />
                <label className={styles.separator}></label>
                <input
                    className={styles.inputField}
                    type={inputState}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                {inputState === InputType.password ? (
                    <img src={closedEye} onClick={handleToggle} />
                ) : (
                    <img src={eye} onClick={handleToggle} />
                )}
            </div>
        );
    }

    return (
        <label
            className={styles.container}
            onFocus={changeImageType}
            onBlur={changeImageType}
            onMouseEnter={changeImageType}
            onMouseLeave={changeImageType}
        >
            {type === 'email' && (
                <>
                    <img
                        src={
                            imageType === 'default' ? defaultMail : outlinedMail
                        }
                        className={styles.icon}
                    />
                    <label className={styles.separator}></label>
                </>
            )}
            <input
                className={styles.inputField}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>
    );
};

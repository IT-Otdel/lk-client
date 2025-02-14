import { useState } from 'react';
import { Button } from 'ui/Button';
import { Input } from 'ui/Input';
import { InputType } from 'ui/Input';
import { ButtonType } from 'ui/Button';

export const UiShowRoom = () => {
    const [text, setText] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Button text="Зарегестрироваться" type={ButtonType.button} />
            <Input
                placeholder="Введите пароль"
                type={InputType.password}
                onChange={(e) => setPass(e.target.value)}
                value={pass}
            />
            <Input
                placeholder="Введите почту"
                type={InputType.email}
                onChange={(e) => setMail(e.target.value)}
                value={mail}
            />
            <Input
                placeholder="aboba"
                type={InputType.text}
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        </div>
    );
};

import { useState } from 'react';
import { Button } from 'ui/Button';
import { Input } from 'ui/Input';

export const UiShowRoom = () => {
    const [text, setText] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Button text="Зарегистрироваться" type="button" />
            <Input
                placeholder="Введите пароль"
                type="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
            />
            <Input
                placeholder="Введите почту"
                type="email"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
            />
            <Input
                placeholder="aboba"
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        </div>
    );
};

import { useState } from 'react';
import { Button } from 'ui/Button';
import { Input, InputType } from 'ui/Input';

export const UiShowRoom = () => {
    const [text, setText] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');

    return (
        <div>
            <Button text="Зарегистрироваться" type="button" />
            <Button text="Зарегистрироваться"/>
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
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        </div>
    );
};

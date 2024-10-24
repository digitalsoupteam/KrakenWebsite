'use client';

import React, {FC, useState} from 'react';
import clsx from 'clsx';

import {Input, Button} from "@/components/ui";

import styles from './UserVerification.module.css';

interface UserVerificationProps {
    className?: string;
    onSuccess: () => void;
}

const UserVerification: FC<UserVerificationProps> = ({className, onSuccess}) => {
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true)

    const handlerUsernameInput = (evt:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(evt.target.value);
        setIsUsernameValid(true);
    };

    const handlerSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (username.length < 3) {
            setIsUsernameValid(false);
            return;
        }

        const url = `https://script.google.com/macros/s/AKfycbxUfaFqCXPMLpfTMxerEdNAxlC4DWgKAG9fQItxbuPyXK18dShc6wVRG5zUUOuBp8wy/exec?username=${username}`;
    };

    return <form className={clsx(className, styles.root)} onSubmit={handlerSubmit}>
        <Input className={styles.input} type={'text'} placeholder={'Enter your telegram username'} isValid={isUsernameValid} value={username}
               onChange={handlerUsernameInput}/>
        <Button className={styles.submit} type={'submit'} isLight={true}>Ok</Button>
    </form>
};

export default UserVerification;

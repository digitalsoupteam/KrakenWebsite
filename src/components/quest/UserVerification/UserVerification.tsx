'use client';

import React, {FC, useState} from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import {Input, Button, Spinner} from "@/components/ui";

import styles from './UserVerification.module.css';

interface UserVerificationProps {
    className?: string;
    onSuccess: (arg: {
        message: string;
        prize: null | string;
    }) => void;
}

const UserVerification: FC<UserVerificationProps> = ({className, onSuccess}) => {
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const [isLoading, setIsLoading] = useState(false);

    const handlerUsernameInput = (evt:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(evt.target.value);
        setIsUsernameValid(true);
    };

    const handlerSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsLoading(true);

        if (username.length < 3) {
            setIsUsernameValid(false);
            return;
        }

        const url = `https://script.google.com/macros/s/AKfycbw49mdd4jc4OuOCVlByUduq1fF56xvByCq-igtFNy_fo9OU-emW9lpjEHNZI6DJ6UcF/exec?username=${username}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            onSuccess(result);
        } catch (error) {
            console.error('There was an error with the fetch operation:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return <form className={clsx(className, styles.root)} onSubmit={handlerSubmit}>
        <Input className={styles.input} type={'text'} placeholder={'Enter your telegram username'} isValid={isUsernameValid} value={username}
               onChange={handlerUsernameInput}/>
        <Button className={styles.submit} type={'submit'} isLight={!isLoading} disabled={isLoading}>
            {isLoading && <Spinner/>}
            {!isLoading && 'Ok'}
        </Button>
    </form>
};

export default UserVerification;

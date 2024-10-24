'use client';

import React, {FC, useState, useCallback} from 'react';
import clsx from "clsx";
import {Wallet} from "@wallet-standard/base";
import {WalletName} from "@solana/wallet-adapter-base";
import {useWallet} from "@solana/wallet-adapter-react";
import {useWalletMultiButton} from "@solana/wallet-adapter-base-ui";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";

import {Button} from "@/components/ui";
import LoginIcon from '/public/images/login.svg';

import styles from './CustomWalletConnectButton.module.css';

interface CustomWalletConnectButtonProps {
    className: string;
    isSmall?: boolean;
}

const CustomWalletConnectButton: FC<CustomWalletConnectButtonProps> = ({className, isSmall}) => {
    const [walletModalConfig, setWalletModalConfig] = useState<Readonly<{
        onSelectWallet(walletName: WalletName): void;
        wallets: Wallet[];
    }> | null>(null);

    const {buttonState, onConnect, onDisconnect, onSelectWallet} = useWalletMultiButton({
    //@ts-ignore
        onSelectWallet: setWalletModalConfig,
    });

    const {publicKey} = useWallet();
    const formattedPublicKey = publicKey
        ? `${publicKey.toBase58().slice(0, 4)}..${publicKey.toBase58().slice(-4)}`
        : '';

    let label;

    switch (buttonState) {
        case 'connected':
            label = formattedPublicKey;
            break;
        case 'connecting':
            label = 'Connecting';
            break;
        case 'disconnecting':
            label = 'Disconnecting';
            break;
        case 'has-wallet':
            label = 'Connect';
            break;
        case 'no-wallet':
            label = 'Log in';
            break;
    }

    const handleClick = useCallback(() => {
        switch (buttonState) {
            case 'connected':
                return onDisconnect;
            case 'connecting':
            case 'disconnecting':
                break;
            case 'has-wallet':
                return onConnect;
            case 'no-wallet':
                return onSelectWallet;
                break;
        }
    }, [buttonState, onDisconnect, onConnect, onSelectWallet]);

    return (
        <div className={clsx(styles.root, className, isSmall && styles.small)}>
            <WalletMultiButton>
                {buttonState === 'no-wallet' && <LoginIcon/>} {label}
            </WalletMultiButton>
            {/*<button onClick={onConnect}>connect</button>*/}
        </div>
    );
};

export default CustomWalletConnectButton;

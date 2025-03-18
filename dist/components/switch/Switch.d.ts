import { ReactNode } from 'react';
interface ISwitch {
    value: boolean;
    onChange: (value: boolean) => void;
    className?: string;
    iconChecked?: ReactNode;
    iconUnChecked?: ReactNode;
}
export declare const Switch: (props: ISwitch) => import("react/jsx-runtime").JSX.Element;
export {};

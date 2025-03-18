import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
interface IPressable extends ButtonHTMLAttributes<HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>;
    className?: string;
    children?: ReactNode;
}
export declare const Pressable: ({ className, children, ...props }: IPressable) => import("react/jsx-runtime").JSX.Element;
export {};

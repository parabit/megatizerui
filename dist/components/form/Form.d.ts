import { ReactNode } from 'react';
interface IForm {
    onSubmit?: () => void;
    className?: string;
    children: ReactNode;
}
export declare const Form: ({ className, children, ...props }: IForm) => import("react/jsx-runtime").JSX.Element;
export {};

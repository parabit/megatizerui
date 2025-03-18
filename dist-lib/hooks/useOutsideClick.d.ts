import { RefObject } from 'react';
export declare const useOutsideClick: (ref?: RefObject<null>) => {
    ref: RefObject<HTMLDivElement | null>;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
};

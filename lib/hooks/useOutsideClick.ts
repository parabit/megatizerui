import { RefObject, useEffect, useRef, useState } from "react";

export const useOutsideClick = (ref?: RefObject<null>) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const _ref = ref || innerRef;

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onToggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (e: MouseEvent) => {
    if (_ref?.current && !_ref?.current.contains(e.target as HTMLDivElement)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref: innerRef, isOpen, onOpen, onClose, onToggle };
};

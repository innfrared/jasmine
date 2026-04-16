import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from 'react';

export const DRAWER_CLOSE_DURATION_MS = 300;

const clearScheduledClose = (timeoutRef: MutableRefObject<number | null>) => {
  if (timeoutRef.current === null) {
    return;
  }

  window.clearTimeout(timeoutRef.current);
  timeoutRef.current = null;
};

export const useDrawerDismiss = (isOpen: boolean, onClose: () => void) => {
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const shouldRender = isOpen || isClosing;

  useEffect(() => {
    return () => {
      clearScheduledClose(closeTimeoutRef);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [shouldRender]);

  const handleClose = useCallback(() => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    clearScheduledClose(closeTimeoutRef);
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      onClose();
      closeTimeoutRef.current = null;
    }, DRAWER_CLOSE_DURATION_MS);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isClosing, onClose, handleClose]);

  return {
    handleClose,
    isClosing,
    shouldRender,
  };
};

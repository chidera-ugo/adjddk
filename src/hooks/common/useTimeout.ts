import { useEffect, useRef } from 'react';

export const useTimeout = (duration: number) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    return () => clearTimeout(ref.current);
  }, []);

  return {
    performTimeoutAction(action: () => void) {
      ref.current = setTimeout(() => {
        action();
      }, duration);
    },
  };
};

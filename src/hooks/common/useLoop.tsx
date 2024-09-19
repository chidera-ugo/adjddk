import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const useLoop = (
  action: Dispatch<SetStateAction<number>>,
  duration: number,
  itemsLength: number,
) => {
  const interval = useRef<any>(null);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  function startInterval() {
    if (!duration) return;

    clearInterval(interval.current);

    interval.current = setInterval(() => {
      action((prev) => {
        if (prev === itemsLength - 1) return 0;
        return prev + 1;
      });
    }, duration);
  }

  return {
    startInterval,
  };
};

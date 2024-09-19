import { useEffect, useRef, useState } from 'react';

interface Args<T> {
  performDebouncedAction?: (value?: any) => void;
  onChange?: (value?: T) => void;
  value?: T;
  dependencies?: any[];
  debounce?: number;
  manualTrigger?: boolean;
}

export const useDebouncer = <T>({
  performDebouncedAction,
  onChange,
  dependencies = [],
  debounce = 600,
  manualTrigger,
  value,
}: Args<T>) => {
  const timeout = useRef<any>();
  const [debouncedValue, setDebouncedValue] = useState(value ?? '');

  useEffect(() => {
    if (manualTrigger) return;

    clearTimeout(timeout.current);

    if (onChange) onChange(value);

    setDebouncedValue('');

    timeout.current = setTimeout(() => {
      setDebouncedValue(value ?? '');

      if (!performDebouncedAction) return;

      performDebouncedAction(value);
    }, debounce);

    return () => clearTimeout(timeout.current);
  }, [...dependencies, value]);

  function handleDebounce(action: () => void) {
    timeout.current = setTimeout(() => {
      action();
    }, debounce);
  }

  return {
    debouncedValue,
    handleDebounce,
  };
};

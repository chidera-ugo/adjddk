import { generateUUID } from '@/helpers/generators/generateUUID';

export const generateKeysForArray = <T>(arr: T[]) => {
  const _arr: Array<T & { key: string }> = [];

  for (let i = 0; i < arr.length; i++) {
    _arr.push({
      key: generateUUID(),
      ...arr[i],
    });
  }

  return _arr;
};

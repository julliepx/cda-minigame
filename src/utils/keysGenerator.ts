import { KeyboardKey, KEYS, KeyType } from "@/types/keys";

export const generateRandomKeys = (
  keyType: KeyType,
  length: number
): KeyboardKey[] => {
  const possibleKeys = KEYS[keyType].split("");

  const keys = Array.from({ length }, () => ({
    code: possibleKeys[Math.floor(Math.random() * possibleKeys.length)],
    isSuccess: false,
  }));

  return keys;
};

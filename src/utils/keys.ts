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

export const updateKeys = (keys: KeyboardKey[], currentKey: KeyboardKey) => {
  return keys.map((key) =>
    key == currentKey && key.code === currentKey.code
      ? { ...key, isSuccess: true }
      : key
  );
};

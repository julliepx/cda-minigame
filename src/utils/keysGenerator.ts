export enum KeyType {
  ALPHANUMERIC = "ALPHANUMERIC",
  ALPHABET = "ALPHABET",
  NUMERIC = "NUMERIC",
}

const KEYS: Record<KeyType, string> = {
  ALPHANUMERIC: "0123456789abcdefghijklmnopqrstuvwxyz",
  ALPHABET: "abcdefghijklmnopqrstuvwxyz",
  NUMERIC: "0123456789",
};

export interface KeyboardKey {
  code: string;
  isSuccess: boolean;
}

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

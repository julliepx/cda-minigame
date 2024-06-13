export type KeyType = "ALPHANUMERIC" | "ALPHABET" | "NUMERIC";

export const KEYS: Record<KeyType, string> = {
  ALPHANUMERIC: "0123456789abcdefghijklmnopqrstuvwxyz",
  ALPHABET: "abcdefghijklmnopqrstuvwxyz",
  NUMERIC: "0123456789",
};

export interface KeyboardKey {
  code: string;
  isSuccess: boolean;
}

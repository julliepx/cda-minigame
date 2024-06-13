"use client";
import {
  KeyType,
  KeyboardKey,
  generateRandomKeys,
} from "@/utils/keysGenerator";
import { useMemo, useState } from "react";

const useKeys = () => {
  const generatedKeys = useMemo<KeyboardKey[]>(
    () => generateRandomKeys(KeyType.ALPHANUMERIC, 6),
    []
  );
  const [keys, setKeys] = useState(generatedKeys);

  return { keys, setKeys };
};

export default useKeys;

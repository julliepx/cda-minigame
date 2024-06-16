"use client";

import { useGameContext } from "@/contexts/GameContext";
import { KeyType } from "@/types/keys";
import { generateRandomKeys } from "@/utils/keys";
import { useCallback, useState } from "react";

const useKeys = () => {
  const { keyType, numberOfKeys } = useGameContext();
  const generatedKeys = useCallback(
    () => generateRandomKeys(keyType as KeyType, numberOfKeys),
    [keyType, numberOfKeys]
  );
  const [keys, setKeys] = useState(generatedKeys);

  return { keys, setKeys };
};

export default useKeys;

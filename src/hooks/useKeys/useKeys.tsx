"use client";

import { KeyType, KeyboardKey } from "@/types/keys";
import { generateRandomKeys } from "@/utils/keys";
import { useMemo, useState } from "react";
import config from "../../../public/configs/gameConfig.json";

const useKeys = () => {
  const generatedKeys = useMemo<KeyboardKey[]>(
    () => generateRandomKeys(config.keyType as KeyType, config.numberOfKeys),
    []
  );
  const [keys, setKeys] = useState(generatedKeys);

  return { keys, setKeys };
};

export default useKeys;

export const LOCAL_STORAGE_KEYS = {
  username: "alta-username",
  ranking: "alta-ranking",
  newcomer: "alta-newcomer",
} as const;

export const setItemToLocalStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getItemFromLocalStorage = <T>(
  key: string,
  initialData: T | null = null
): T | null => {
  const storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    return initialData;
  }
  try {
    const parsedValue: T = JSON.parse(storedValue);
    return parsedValue;
  } catch {
    return initialData;
  }
};

export const deleteItemFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

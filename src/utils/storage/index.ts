export const setItem = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

/**
 * Get item from storage by name
 * @returns item or null if item does not exist
 */
export const getItem = (name: string) => {
  const item = localStorage.getItem(name);

  if (!item) {
    return null;
  }

  return JSON.parse(item);
};

export const isHexString = (value: string): boolean => {
  return /^0x[0-9a-fA-F]+$/.test(value);
};

export const isAddress = (value: string): boolean => {
  return /^0x[0-9a-fA-F]{40}$/.test(value);
};

export const isPositiveInteger = (value: string): boolean => {
  return /^[0-9]+$/.test(value);
};

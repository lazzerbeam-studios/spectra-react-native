export const StringToJson = (value: string): any => {
  const valueParse = JSON.parse(value);
  return valueParse;
};

export const JsonToString = (value: any): string => {
  const valueStringify = JSON.stringify(value);
  return valueStringify;
};

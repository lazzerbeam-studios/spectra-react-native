export function phoneNumberFormat(value: string): string {
  const digits = value.replace(/\D/g, '');
  const digitsLimited = digits.slice(0, 10);
  if (digitsLimited.length === 0) {
    return '';
  } else if (digitsLimited.length <= 3) {
    return `(${digitsLimited}`;
  } else if (digitsLimited.length <= 6) {
    return `(${digitsLimited.slice(0, 3)}) ${digitsLimited.slice(3)}`;
  } else {
    return `(${digitsLimited.slice(0, 3)}) ${digitsLimited.slice(3, 6)}-${digitsLimited.slice(6)}`;
  }
}

export function phoneNumberStrip(value: string): string {
  return value.replace(/\D/g, '');
}

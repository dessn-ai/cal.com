// Browser-safe mock implementation
const generateRandomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/**
 * Browser-safe mock implementation
 * @param text Value to be encrypted
 * @param key Key used to encrypt value
 * @returns Encrypted value using key
 */
export const symmetricEncrypt = function (text: string, key: string) {
  // Simple mock implementation for preview purposes
  const iv = generateRandomString(16);
  const encoded = btoa(text);
  return `${iv}:${encoded}`;
};

/**
 * Browser-safe mock implementation
 * @param text Value to decrypt
 * @param key Key used to decrypt value
 */
export const symmetricDecrypt = function (text: string, key: string) {
  // Simple mock implementation for preview purposes
  const components = text.split(":");
  if (components.length < 2) return text;
  try {
    return atob(components[1]);
  } catch {
    return text;
  }
};
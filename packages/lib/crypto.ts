// Mock implementation for preview purposes
const ALGORITHM = "aes256";
const INPUT_ENCODING = "utf8";
const OUTPUT_ENCODING = "hex";
const IV_LENGTH = 16;

/**
 * Mock encryption for preview purposes
 * @param text Value to be encrypted
 * @param key Key used to encrypt value
 * @returns Encrypted value using key
 */
export const symmetricEncrypt = function (text: string, key: string) {
  // Simple mock encryption for preview
  return `mock-encrypted:${text}`;
};

/**
 * Mock decryption for preview purposes
 * @param text Value to decrypt
 * @param key Key used to decrypt value
 */
export const symmetricDecrypt = function (text: string, key: string) {
  // Simple mock decryption for preview
  const parts = text.split(":");
  return parts[parts.length - 1];
};
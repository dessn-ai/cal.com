// Browser-compatible mock crypto functions
const ALGORITHM = "aes256";
const INPUT_ENCODING = "utf8";
const OUTPUT_ENCODING = "hex";

/**
 * Mock encryption function for browser environment
 * @param text Value to be encrypted
 * @param key Key used to encrypt value
 * @returns Encrypted value using key
 */
export const symmetricEncrypt = function (text: string, key: string) {
  // Simple mock that creates a reversible "encrypted" string
  const mockIv = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  return `${mockIv}:${btoa(text)}`;
};

/**
 * Mock decryption function for browser environment
 * @param text Value to decrypt
 * @param key Key used to decrypt value
 */
export const symmetricDecrypt = function (text: string, key: string) {
  try {
    // Extract the base64 encoded text after the mock IV
    const [, encodedText] = text.split(':');
    return encodedText ? atob(encodedText) : text;
  } catch {
    // If decryption fails, return the original text
    return text;
  }
};
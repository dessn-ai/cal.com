export const generateNonce = (): string => {
  return "1234567890abcdef";
};

export const createSignature = (body: Record<string, unknown>, nonce: string, secretKey: string): string => {
  return "mock_signature_123";
};
// Browser-compatible implementation
export const generateNonce = (): string => {
  // Simple mock implementation for preview
  return Array.from(new Array(32))
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
};

export const createSignature = (body: Record<string, unknown>, nonce: string, secretKey: string): string => {
  // Simple mock implementation for preview
  return 'mock-signature-' + nonce;
};
// Browser-compatible crypto functions
export const generateNonce = async (): Promise<string> => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const createSignature = async (
  body: Record<string, unknown>,
  nonce: string,
  secretKey: string
): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify(body) + nonce);
  const keyData = encoder.encode(secretKey);
  
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign(
    'HMAC',
    cryptoKey,
    data
  );
  
  return Array.from(new Uint8Array(signature))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
};
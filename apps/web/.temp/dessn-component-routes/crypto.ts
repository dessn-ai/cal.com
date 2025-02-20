// Virtual crypto module for browser environment
export default {
  randomBytes: (size: number) => {
    const arr = new Uint8Array(size);
    if (typeof window !== 'undefined') {
      window.crypto.getRandomValues(arr);
    }
    return {
      toString: (encoding: string) => {
        if (encoding === 'hex') {
          return Array.from(arr)
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
        }
        return '';
      }
    };
  }
};
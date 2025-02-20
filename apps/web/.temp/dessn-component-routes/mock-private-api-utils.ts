export const generateNonce = () => {
  return Array.from(new Array(16))
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
};
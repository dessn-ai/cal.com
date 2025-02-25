export const symmetricEncrypt = function (text: string, key: string) {
  // Simple mock that just returns the text with a fake IV
  return `mock-iv:${text}`;
};

export const symmetricDecrypt = function (text: string, key: string) {
  // Simple mock that just returns the original text
  const components = text.split(":");
  return components[1] || text;
};
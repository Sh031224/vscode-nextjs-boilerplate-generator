export const strToBuffer = (content: string): Uint8Array => {
  const arrayBuffer = new ArrayBuffer(content.length * 1);
  const newUint = new Uint8Array(arrayBuffer);

  newUint.forEach((_, i) => {
    newUint[i] = content.charCodeAt(i);
  });

  return newUint;
};

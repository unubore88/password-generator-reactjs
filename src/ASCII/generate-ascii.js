export const numberAscii = () => {
  const array = [];
  for (let i = 49; i <= 57; i++) {
    array.push(String.fromCharCode(i));
  }
  return array;
};

export const lowercaseAscii = () => {
  const array = [];
  for (let i = 97; i <= 122; i++) {
    array.push(String.fromCharCode(i));
  }
  return array;
};

export const uppercaseAscii = () => {
  const array = [];
  for (let i = 65; i <= 90; i++) {
    array.push(String.fromCharCode(i));
  }
  return array;
};

export const symbolAscii = () => {
  const array = [];
  for (let i = 33; i <= 47; i++) {
    array.push(String.fromCharCode(i));
  }
  return array;
};

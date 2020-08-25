export const asyncTimeout = ms => new Promise(resolve => setTimeout(resolve, ms));

export const uniqueId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

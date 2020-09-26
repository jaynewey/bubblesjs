export const snakeToCamel = (s) =>
  s.replace(/(_\w)/g, (k) => k[1].toUpperCase());

export const capitalise = (word) =>
  word[0].toUpperCase() + word.substring(1).toLowerCase();

export const uniform = (min, max) => Math.random() * (max - min) + min;

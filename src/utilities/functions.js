export const matchNumbers = (value) => {
  const regex = /[0-9]*/g;
  const parsed = Number.parseInt(value.toString().match(regex).join(''), 10);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const toLowerCaseWithDash = (str) => {
  return str.trim().toLowerCase().replace(/\s/g, '-');
};

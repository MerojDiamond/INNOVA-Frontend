export const requiredValidator = (v) => {
  if (!v) return `Required field`;
  return true;
};

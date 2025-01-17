export const minValidator = (v, extra) => {
  if (v?.length < extra.length) return `Minimum length: ${extra.length} chars`;
  return true;
};

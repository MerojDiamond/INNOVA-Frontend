export const emailValidator = (v) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(v)) return "Invalid email address";
  return true;
};

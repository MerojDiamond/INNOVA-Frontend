export const makeRules = (rules) => {
  return {
    validator: (r, v) => useRules(v, rules),
    trigger: ["blur", "input"],
  };
};
export const useRules = (v, ruleList) => {
  for (const rule of ruleList) {
    let result;
    if (rule instanceof Array) {
      result = rule[0](v, rule[1]);
    } else {
      result = rule(v);
    }
    if (result !== true) return new Error(result);
  }
  return true;
};

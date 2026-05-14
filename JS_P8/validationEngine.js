export const validateField = (...validators) => async (value) => {

  const results = await Promise.all(validators.map(v => v(value)));


  const errors = results
    .filter(res => !res.isValid)
    .map(res => res.error);


  return {
    isValid: errors.length === 0,
    errors: errors
  };
};
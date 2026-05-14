export const required = (msg) => (value) => (
{
  isValid: value !== undefined && value !== null && value.trim() !== '',
  error: msg
});

export const minLength = (min) => (msg) => (value) => (
{
  isValid: String(value).length >= min,
  error: msg
});

export const email = (msg) => (value) => 
{
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return { isValid: re.test(value), error: msg };
};


export const uniqueUsername = (msg) => async (value) =>
{
  return new Promise((resolve) => 
{
    setTimeout(() => 
{
      const forbidden = ['admin', 'root', 'moderator'];
      const isTaken = forbidden.includes(value.toLowerCase());
      resolve({ isValid: !isTaken, error: msg });
    }, 1000);
  });
};
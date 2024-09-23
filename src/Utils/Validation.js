export const validateIDNP = (idnp) => {
  const regex = /^[0-9]+$/;
  return regex.test(idnp);
};
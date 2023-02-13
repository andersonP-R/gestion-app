export const isValidEmail = (email: string): boolean => {
  const match = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return !!match;
};

/**
 * Check if an email is valid.
 * @param email
 * @returns The comparison between a regEx expression and the param (email)
 */
export const isEmail = (email: string): string | undefined => {
  return isValidEmail(email) ? undefined : "Correo inválido";
};

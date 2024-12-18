// Create a new file for validation constants/utilities
export const EMAIL_REGEX = /\S+@\S+\.\S+/

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email)
}

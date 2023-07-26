export namespace StringUtils {
  /**
   * Check the string is empty string or undefine
   * @param str input string
   * @returns
   */
  export const isBlank = (str?: string): boolean => {
    return !str || str.trim().length === 0;
  };
}

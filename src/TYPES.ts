/**
 * Type defination for error map to be passed to StringUtilErrorMap.
 *
 * @interface
 * @typedef {StringUtilsErrorMap}
 */
export interface StringUtilsErrorMap {
  /**
   * Overriding message string for StringUtilError instance
   */
  message?: string
  /**
   * Overriding error code string for StringUtilError instance
   */
  errorCode?: string
  /**
   * Overriding HTTP status code for StringUtilError instance
   */
  statusCode?: number
}

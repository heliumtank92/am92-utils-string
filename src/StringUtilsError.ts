import { SERVICE } from './CONFIG'
import { StringUtilsErrorMap } from './TYPES'

/** @ignore */
const DEFAULT_ERROR_MSG = 'String Utils Error'
/** @ignore */
const DEFAULT_ERROR_STATUS_CODE = 500
/** @ignore */
const DEFAULT_ERROR_CODE = 'StringUtils::GENERIC'

/**
 * Error class whose instance is thrown in case of any error.
 *
 * @class
 * @typedef {StringUtilsError}
 * @extends {Error}
 */
export default class StringUtilsError extends Error {
  /**
   * Flag to identify if error is a custom error.
   */
  readonly _isCustomError = true
  /**
   * Flag to identify if error is a StringUtilsError.
   */
  readonly _isStringUtilsError = true
  /**
   * Node project from which Error is thrown.
   */
  readonly service: string
  /**
   * Error's message string.
   */
  message: string
  /**
   * HTTP status code associated with the error.
   */
  statusCode: number
  /**
   * Error Code.
   */
  errorCode: string
  /**
   * Error object.
   */
  error?: any
  /**
   * Creates an instance of StringUtilsError.
   *
   * @constructor
   * @param [e] Any Error instance to wrap with StringUtilsError.
   * @param [eMap] StringUtilsErrorMap to rewrap error for better understanding.
   */
  constructor(e: any, eMap: StringUtilsErrorMap) {
    super()

    this.service = SERVICE
    this.message = eMap?.message || e?.message || DEFAULT_ERROR_MSG
    this.statusCode = eMap?.statusCode || DEFAULT_ERROR_STATUS_CODE
    this.errorCode = eMap?.errorCode || e?.code || DEFAULT_ERROR_CODE
    this.error = e
  }
}

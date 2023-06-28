import StringUtilsError from '../StringUtilsError'
import { StringUtilsErrorMap } from '../TYPES'

/**
 * Function to generate random ID using epoch time with random number.
 *
 * @param [length=10]
 * @returns Random ID string of specified length
 */
export function randomId(length: RandomIdLength = 10): string {
  const multiplier = RANDOM_ID_MULTIPLIER[length]

  if (!multiplier) {
    throw new StringUtilsError(undefined, RANDOM_ID_ERROR_INVAILD_LENGTH_ERROR)
  }

  const now = new Date().getTime()
  const random = Math.trunc((Math.random() + 1) * multiplier)
  return `${now.toString(36)}-${random.toString(36)}`
}

/** @ignore */
export const RANDOM_ID_MULTIPLIER: RandomIdMultipler = {
  20: Math.pow(10, 16),
  19: Math.pow(10, 15),
  18: Math.pow(10, 13),
  17: Math.pow(10, 12),
  16: Math.pow(10, 10),
  15: Math.pow(10, 9),
  14: Math.pow(10, 7),
  13: Math.pow(10, 5),
  12: Math.pow(10, 4),
  11: Math.pow(10, 2),
  10: 10
}

/** @ignore */
export const RANDOM_ID_ERROR_INVAILD_LENGTH_ERROR: StringUtilsErrorMap = {
  message: 'Invalid Random Id Length',
  errorCode: 'StringUtils::RANDOM_ID_INVAILD_LENGTH'
}

/**
 * Type definition for length values as integer of random ID.
 *
 * @typedef {RandomIdLength}
 */
export type RandomIdLength =
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20

/** @ignore */
export type RandomIdMultipler = {
  [key in RandomIdLength]: number
}

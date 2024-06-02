/**
 * Returns a string in the format `01-02-2020`.
 * @param date Date object to be parsed to it.
 * @example 
 * ```javascript
 * const date = getMDYString(new Date());
 * ```
 */
export function getMDYString<T extends string = string>(date: Date): `${T}-${T}-${T}` {
  const dateArray = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
  return dateArray.join('-') as `${T}-${T}-${T}`;
}
export function string(val: any) {
  return String(val)
}

/**
 * @param bool any value 
 * @param first gets returned if `bool` is truthy
 * @param second gets returned if `bool` is falsy
 */
export function pickObj<T, U>(bool: any, first: T, second: U) {
  return Boolean(bool) ? first : second;
}
export function lowercase<T extends string >(str:T): Lowercase<T> {
  return str.toLowerCase() as Lowercase<T>
}

export function uppercase<T extends string >(str:T): Uppercase<T> {
  return str.toUpperCase() as Uppercase<T>
}

export function entries<T extends EmptyObject, K extends Helpers.Keyof<T>>(object: T) {
  return Object.entries(object) as [K, T[K]][];
}

/**
 * @param dims 2-tuple of numbers or strings 
 * @param size number to scale the dimensions to
 * @example
 * ```javascript
 * const sizes = scaleSize([40, 40], 3);
 * console.log(sizes); // ["120", "120"]
 * ```
 */
export function scaleSize<T extends `${number}` | number = number>(dims: [T, T], size: number = 1): [string, string] {
  switch (size !== 1) {
    case true: 
      return dims.map(dim => (
        string(Number(dim) * size)
      )) as [string, string];
    default: 
      return dims as [string, string];
  }
}

export function debounce<T extends (VoidFunction | ((...args: any[]) => void))>(fn: T, delta = 500): T {
  let timer: any;
  return ((...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delta);
  }) as T
}
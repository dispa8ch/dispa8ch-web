export function noop() {
  return;
}

export function string(val: any) {
  return String(val);
}

/**
 * @param bool any value
 * @param first gets returned if `bool` is truthy
 * @param second gets returned if `bool` is falsy
 */
export function ternary<T, U>(bool: any, first: T, second: U) {
  return Boolean(bool) ? first : second;
}

export function lowercase<T extends string>(str: T): Lowercase<T> {
  return str.toLowerCase() as Lowercase<T>;
}

export function uppercase<T extends string>(str: T): Uppercase<T> {
  return str.toUpperCase() as Uppercase<T>;
}

export function entries<T extends EmptyObject, K extends Helpers.Keyof<T>>(
  object: T
) {
  return Object.entries(object) as [K, T[K]][];
}

export function capitalize<S extends string>(string: S): Capitalize<S> {
  return `${string[0].toUpperCase()}`.concat(string.slice(1)) as Capitalize<S>;
}

export function isFalsy(value: any): value is NullOrUndefined {
  return value === null || value === undefined;
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
export function scaleSize<T extends `${number}` | number = number>(
  dims: [T, T],
  size: number = 1
): [string, string] {
  switch (size !== 1) {
    case true:
      return dims.map((dim) => string(Number(dim) * size)) as [string, string];
    default:
      return dims as [string, string];
  }
}

/**
 * Batches expensive operations that run multiple times into on single operation.
 * @param fn callback to be called after a timeout has elapsed
 * @param delta timeout in milliseconds; defaults to 500
 * @example
 * ```javascript
 * function handleDatabaseEmailSubmission({curentTarget: {value}}: FormEvent<HTMLInputElement>) {
 *  // make a database trip here
 * }
 * <input type="text" onInput={debounce(handleDatabaseEmailSubmission, 1000)} />
 * ```
 */
export function debounce<T extends VoidFunction | FunctionWithArgs>(
  fn: T,
  delta = 500
): T {
  let timer: any;
  return ((...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delta);
  }) as T;
}

/**
 * Should be used in client components
 */
export function getTheme(): TTheme {
  const html = document.documentElement as HTMLHtmlElement;
  const theme = (html.getAttribute("data-theme") || 'light') as TTheme
  return theme;
}

export function switchTheme(): TTheme {
  const html = document.querySelector('html')!
  const theme = getTheme()
  if (theme === "light") return html.setAttribute("data-theme", "dark"), 'dark';
  else return html.setAttribute("data-theme", "light"), 'light';
}

/**
 * This function should be used with the bytesToBase64 function to encode email addresses
 * @example 
 * ```javascript
 * const encodedEmail = encodeString('michthebrand@gmail.com');
 * ```
 */
export function encodeString(str: string) {
  return new TextEncoder().encode(str)
}

export function stringToBase64(str: string): Base64 {
  const binString = String.fromCodePoint(...encodeString(str));
  return btoa(binString) as Base64;
}

export function base64ToString(string: Base64) {
  'use client';
  const binString = atob(string);
  return new TextDecoder().decode(Uint8Array.from(binString, c => c.codePointAt(0)!))
}
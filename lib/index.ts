export function string(val: any) {
  return String(val)
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

export function scaleSize<T extends string | number = string>(dims: [T, T], size: number = 1): [string, string] {
  switch (size !== 1) {
    case true: 
      const nums = dims;
      return nums.map(num => (
        string(Number(num) * size)
      )) as [string, string];
    default: 
      return dims as [string, string];
  }
}

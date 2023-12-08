export function string(val:any) {
  return String(val)
}

export function lowercase<T extends string >(str:T): Lowercase<T> {
  return str.toLowerCase() as Lowercase<T>
}
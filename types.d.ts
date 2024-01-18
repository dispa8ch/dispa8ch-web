export {}

declare global {
  type EmptyObject<T = any> = {
    [index: string | number | symbol]: T;
  }
}